const jsonServer = require('json-server')
const cors = require('cors');
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults([ "noCors" ])

const PORT = process.env.PORT || 8000;

server.use(middlewares)
server.use(router)
server.use( cors())
server.listen(PORT, () => {
  console.log('JSON Server is running')
})

// Add custom routes before JSON Server router
server.get('/foods', (req, res) => {
    res.jsonp(req.query)
  })