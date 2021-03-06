const Datastore = require('nedb')

const database = new Datastore('./database.db')
database.loadDatabase()

const saySomething = (req, res, next) => {
  res.status(200).json({
    body: 'Hello from the server',
  })
}

const lists = (req, res, next) => {
  if (req.method === 'GET') {
    database.find({}, (error, lists) => {
      res.status(200).json({
        lists,
      })
    })
  }

  if (req.method === 'POST') {
    console.log('==hello')

    res.status(200).json({})
    console.log('==ja?', req.body.name)

    database.insert({
      id: Math.floor(100000 + Math.random() * 900000),
      name: req.body.name,
    })
  }
}

module.exports.saySomething = saySomething
module.exports.lists = lists
