const express = require('express')


const generateExpressApp = (routes) => {
    // Express configuration.
    const app = express()
    app.set('port', process.env.PORT || 8080)
    app.set('trust proxy', true)
    app.use(express.json())
    app.use('/bluworks/api/v1', routes )
    return app
}

module.exports = generateExpressApp
