const startServer = require('./server')
const generateExpressApp = require('./app')
const routes = require('./src/routes/routes')
const app = generateExpressApp(routes)

const server =startServer(app)

module.exports = { app, server }
