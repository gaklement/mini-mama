const Datastore = require('nedb')
const { MongoClient } = require('mongodb')

const database = new Datastore('./database.db')
database.loadDatabase()

const user = 'Gisa'
const password = 'IReallyLikeFood'

const uri = `mongodb+srv://${user}:${password}@thenextcluster.gjiq0.mongodb.net/i-like-food?retryWrites=true&w=majority`
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const list = (req, res, next) => {
  async function run() {
    try {
      await client.connect()
      const mongoDatabase = client.db()

      // use list here instead
      const lists = mongoDatabase.collection('lists')

      const query = { name: 'A database list' }
      const databaseList = await lists.findOne(query)
      console.log(databaseList)

      //
      // noch nciht gemacht
      // get a list
      if (req.method === 'GET') {
        console.log('== helllo i run')
        database.find({ id: req.query.listId }, (_, list) => {
          res.status(200).json({
            ...list[0],
          })
        })
      }
      //
    } finally {
      console.log('==but i also close')
      // await client.close()
    }
  }

  run().catch(console.dir)

  // // get a list
  // if (req.method === 'GET') {
  //   database.find({ id: req.query.listId }, (_, list) => {
  //     res.status(200).json({
  //       ...list[0],
  //     })
  //   })
  // }

  // update list name
  if (req.method === 'PUT') {
    database.update(
      { id: req.body.listId },
      {
        $set: {
          name: req.body.newName,
        },
      }
    )

    res.status(200).json({})
  }

  // delete a list
  if (req.method === 'DELETE') {
    database.remove({ id: req.query.listId }, {}, () => {
      res.status(200).json({})
    })
  }
}

const lists = (req, res, next) => {
  async function run() {
    try {
      await client.connect()
      const mongoDatabase = client.db()

      // add new list
      if (req.method === 'POST') {
        const listId = Math.floor(100000 + Math.random() * 900000).toString()

        await mongoDatabase.collection('lists').insertOne({
          id: listId,
          createTime: Date.now(),
          name: req.body.name,
          items: [],
        })

        res.status(200).json({
          listId,
        })
      }

      // get all lists
      if (req.method === 'GET') {
        const allLists = await mongoDatabase
          .collection('lists')
          .find({})
          .toArray()

        const sortedLists = allLists.sort(
          (listA, listB) =>
            new Date(listA.createTime) - new Date(listB.createTime)
        )

        res.status(200).json({
          lists: sortedLists,
        })
      }

      // add item to list
      if (req.method === 'PUT') {
        console.log('==req body id', req.body.id)
        mongoDatabase.collection('lists').updateOne(
          { id: req.body.id },
          {
            $push: {
              items: {
                id: Math.floor(100000 + Math.random() * 900000).toString(),
                name: req.body.item,
              },
            },
          }
        )

        // database.update(
        //   { id: req.body.id },
        //   {
        //     $push: {
        //       items: {
        //         id: Math.floor(100000 + Math.random() * 900000).toString(),
        //         name: req.body.item,
        //       },
        //     },
        //   },
        //   {}
        // )

        res.status(200).json({})
      }
    } finally {
      // await client.close()
    }
  }

  run().catch(console.dir)

  // // get all lists
  // if (req.method === 'GET') {
  //   database.find({}, (_, lists) => {
  //     const sortedLists = lists.sort(
  //       (listA, listB) =>
  //         new Date(listA.createTime) - new Date(listB.createTime)
  //     )

  //     res.status(200).json({
  //       lists: sortedLists,
  //     })
  //   })
  // }

  // add new list
  // if (req.method === 'POST') {
  //   const listId = Math.floor(100000 + Math.random() * 900000).toString()

  //   database.insert({
  //     id: listId,
  //     createTime: Date.now(),
  //     name: req.body.name,
  //     items: [],
  //   })

  //   res.status(200).json({
  //     listId,
  //   })
  // }

  // // add item to list
  // if (req.method === 'PUT') {
  //   database.update(
  //     { id: req.body.id },
  //     {
  //       $push: {
  //         items: {
  //           id: Math.floor(100000 + Math.random() * 900000).toString(),
  //           name: req.body.item,
  //         },
  //       },
  //     },
  //     {}
  //   )

  //   res.status(200).json({})
  // }
}

const item = (req, res, next) => {
  // toggle item from done/undone
  if (req.method === 'PUT') {
    database.find({ id: req.body.listId }, (_, list) => {
      // find item in the list's items
      // update it and overwrite all items
      const updatedItems = list[0].items.map((item) =>
        item.id === req.body.itemId
          ? {
              ...item,
              doneTime: item.done ? null : Date.now(),
              done: !item.done,
            }
          : item
      )

      database.update(
        { id: req.body.listId },
        {
          $set: { items: updatedItems },
        }
      )
    })

    res.status(200).json({})
  }
}

module.exports.lists = lists
module.exports.list = list
module.exports.item = item

// move controllers into the async
// rewrite controllers to use mongodb
// keep the database connection open
// maybe put all controller types (lists, list, item) into one giant module or maybe not
// close db connection
// id => _id
// clean up
