const MongoClient = require('mongodb').MongoClient

const user = 'Gisa'
const password = 'IReallyLikeMama'
const url = `mongodb+srv://${user}:${password}@cluster0.yzaynb9.mongodb.net/test?retryWrites=true&w=majority`

let database

module.exports = {
  connectToServer: (callback) => {
    MongoClient.connect(
      url,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      (error, client) => {
        console.log('the error i get', error)

        database = client.db()

        return callback(error)
      }
    )
  },
  getDatabase: () => database,
}
