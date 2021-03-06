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
    res.status(200).json({})

    database.insert({
      id: Math.floor(100000 + Math.random() * 900000),
      name: req.body.name,
      createTime: Date.now(),
    })
  }
}

module.exports.lists = lists
