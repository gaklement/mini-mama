const Datastore = require('nedb')

const database = new Datastore('./database.db')
database.loadDatabase()

const lists = (req, res, next) => {
  if (req.method === 'GET') {
    database.find({}, (error, lists) => {
      res.status(200).json({
        lists,
      })
    })
  }

  if (req.method === 'POST') {
    res.status(200).json({})

    database.insert({
      id: Math.floor(100000 + Math.random() * 900000),
      name: req.body.name,
    })
  }
}

module.exports.saySomething = saySomething
module.exports.lists = lists
