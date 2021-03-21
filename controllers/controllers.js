const Datastore = require('nedb')

const database = new Datastore('./database.db')
database.loadDatabase()

const list = (req, res, next) => {
  // get a list
  if (req.method === 'GET') {
    database.find({ id: req.query.listId }, (_, list) => {
      res.status(200).json({
        ...list[0],
      })
    })
  }

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
}

const lists = (req, res, next) => {
  // get all lists
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

  // add new list
  if (req.method === 'POST') {
    database.insert({
      id: Math.floor(100000 + Math.random() * 900000).toString(),
      createTime: Date.now(),
      name: req.body.name,
      items: [],
    })

    res.status(200).json({})
  }

  // add item to list
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
