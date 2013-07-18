var express = require('express'),
    app = express(),
    http = require('http'),
    server = http.createServer(app),
    io = require('socket.io').listen(server),
    view = __dirname + '/views',
    pub = __dirname + '/public',
    doT = require('express-dot');


app.set('views', view);
app.set('view engine', 'doT');
app.engine('html', doT.__express);
app.use(express.bodyParser());
app.locals.layout = false;
app.use(express.static(pub));
app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);
app.use(app.router);

function logErrors(err, req, res, next) {
    console.error(err.stack);
    next(err);
}

function clientErrorHandler(err, req, res, next) {
    if (req.xhr)
        res.send(500, {error: 'You killed it!'});
    else
        next(err);
}

function errorHandler(err, req, res, next) {
    res.status(500);
    res.render('error', {error: err});
}


app.configure('development', function () {
    app.use(express.errorHandler({dumpExceptions: true, showStack: true}));
});

app.configure('production', function () {
    app.use(express.errorHandler());
});

io.configure(function () {
    io.set("transports", ["xhr-polling"]);
    io.set("polling duration", 10);
});

var port = process.env.PORT || 35728;
server.listen(port, function () {
    console.log("Express server listening on port %d in %s mode", server.address().port, app.settings.env);
});

app.get('/', function (req, res) {
    var templateData = {title:"test"};
    res.render('index.html', templateData);
});