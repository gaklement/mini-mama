const saySomething = (req, res, next) => {
  res.status(200).json({
    body: 'Hello from the server',
  })
}

const lists = (req, res, next) => {
  if (req.method === 'GET') {
    res.status(200).json({
      lists: {
        id: '1',
        name: 'list1',
      },
    })
  }
}
module.exports.saySomething = saySomething
module.exports.lists = lists
