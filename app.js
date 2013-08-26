var express = require('express'),
    app = express(),
    http = require('http'),
    server = http.createServer(app),
    io = require('socket.io').listen(server),
    view = __dirname + '/views',
    pub = __dirname + '/public',
    doT = require('express-dot');


require('./lib/environment.js')(app, express, {'view': view, 'doT': doT, 'pub': pub});
require('./lib/routes.js')(app);
require('./lib/socket.js')(io);

var port = process.env.PORT || 35728;
server.listen(port, function () {
    console.log("Express server listening on port %d in %s mode", server.address().port, app.settings.env);
});

