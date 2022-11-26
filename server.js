const startServer = (app) => {
    console.log('Starting server')

    // Start Express server.
    const server = app.listen(app.get('port'), () => {
      console.log('server started', {
            port: app.get('port'),
            env: app.get('env')
        })
    })
    return server
}

module.exports = startServer
