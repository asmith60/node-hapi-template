// start file for the Hapi.js server
var Config = require('require-directory')(module, './config');
var Hapi = require('hapi');
var Plugins = Config.plugins;
var Routes = Config.routes;

// Create a server with a host and port
var server = new Hapi.Server();

// Set the server connection properties such as `host` and `port`
server.connection(Config.env.getConnection());

// Register hapi-swagger auto-documentation at /documentations
server.register(Plugins, function(err) {
    if (err) {
        return console.error(err);
    }

    // Add the routes
    server.route(Routes);

    // Start the server
    server.start(function(err) {
        if (err) {
            return console.error(err);
        }

        console.log('Server started at: ' + server.info.uri);
        console.log('API docs available at: ' + server.info.uri + '/documentation');

    });

});
