const MongoClient = require('mongodb').MongoClient

const user = 'Gisa'
const password = 'IReallyLikeMama'
const url = `mongodb+srv://${user}:${password}@cluster0.yzaynb9.mongodb.net/test`
// possible add ?retryWrites=true&w=majority to the url string
// change something to create new commit
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
        database = client.db()

        return callback(error)
      }
    )
  },
  getDatabase: () => database,
}
