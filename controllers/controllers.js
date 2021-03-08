const Datastore = require('nedb')

const database = new Datastore('./database.db')
database.loadDatabase()

const lists = (req, res, next) => {
  if (req.method === 'GET') {
    database.find({}, (_, lists) => {
      const sortedLists = lists.sort(
        (listA, listB) =>
          new Date(listA.createTime) - new Date(listB.createTime)
      )

      res.status(200).json({
        lists: sortedLists,
      })
    })
  }

  if (req.method === 'POST') {
    database.insert({
      id: Math.floor(100000 + Math.random() * 900000).toString(),
      createTime: Date.now(),
      name: req.body.name,
      items: [],
    })

    res.status(200).json({})
  }

  if (req.method === 'PUT') {
    database.update(
      { id: req.body.id },
      {
        $push: {
          items: {
            id: Math.floor(100000 + Math.random() * 900000).toString(),
            name: req.body.item,
          },
        },
      },
      {}
    )

    res.status(200).json({})
  }
}

const listItems = (req, res, next) => {
  if (req.method === 'GET') {
    database.findOne({ id: req.query.listId }, (_, doc) =>
      res.status(200).json({
        listItems: doc.items,
      })
    )
  }
}

module.exports.lists = lists
module.exports.listItems = listItems
