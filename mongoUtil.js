const MongoClient = require('mongodb').MongoClient

const user = 'Gisa'
const password = 'IReallyLikeFood'
const url = `mongodb+srv://${user}:${password}@thenextcluster.gjiq0.mongodb.net/i-like-food?retryWrites=true&w=majority`

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
