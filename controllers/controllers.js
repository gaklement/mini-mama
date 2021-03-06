const mongoUtil = require('../mongoUtil')

const list = (req, res) => {
  async function run() {
    try {
      const mongoDatabase = mongoUtil.getDatabase()

      // get a list
      if (req.method === 'GET') {
        const lists = await mongoDatabase
          .collection('lists')
          .find({ id: req.query.listId })
          .toArray()

        res.status(200).json({ ...lists[0] })
      }

      // update list name
      if (req.method === 'PUT') {
        await mongoDatabase.collection('lists').updateOne(
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
        await mongoDatabase
          .collection('lists')
          .deleteOne({ id: req.query.listId })
        res.status(200).json({})
      }
    } finally {
      // await client.close()
    }
  }

  run().catch(console.dir)
}

const lists = (req, res) => {
  async function run() {
    try {
      const mongoDatabase = mongoUtil.getDatabase()

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

        res.status(200).json({})
      }
    } finally {
      // await client.close()
    }
  }

  run().catch(console.dir)
}

const item = (req, res) => {
  async function run() {
    try {
      const mongoDatabase = mongoUtil.getDatabase()

      // toggle item from done/undone
      if (req.method === 'PUT') {
        const list = await mongoDatabase
          .collection('lists')
          .find({ id: req.body.listId })
          .toArray()

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

        await mongoDatabase.collection('lists').updateOne(
          { id: req.body.listId },
          {
            $set: { items: updatedItems },
          }
        )

        res.status(200).json({})
      }

      if (req.method === 'DELETE') {
        const listId = req.query.listId
        const listItemId = req.query.id

        const list = await mongoDatabase
          .collection('lists')
          .find({ id: listId })
          .toArray()

        const updatedItems = list[0].items.filter(
          (item) => item.id !== listItemId
        )

        await mongoDatabase
          .collection('lists')
          .updateOne({ id: listId }, { $set: { items: updatedItems } })

        res.status(200).json({})
      }
    } finally {
      // await client.close()
    }
  }

  run().catch(console.dir)
}

const items = (req, res) => {
  async function run() {
    try {
      const mongoDatabase = mongoUtil.getDatabase()

      // toggle all items to undone
      if (req.method === 'PUT') {
        const list = await mongoDatabase
          .collection('lists')
          .find({ id: req.body.listId })
          .toArray()

        const updatedItems = list[0].items.map((item) => ({
          ...item,
          doneTime: Date.now(),
          done: false,
        }))

        await mongoDatabase.collection('lists').updateOne(
          { id: req.body.listId },
          {
            $set: { items: updatedItems },
          }
        )

        res.status(200).json({})
      }
    } finally {
    }
  }
  run().catch(console.dir)
}

module.exports.lists = lists
module.exports.list = list
module.exports.item = item
module.exports.items = items

// maybe put all controller types (lists, list, item) into one giant module or maybe not
// close db connection
// id => _id
// clean up
// add loading messages in the client
