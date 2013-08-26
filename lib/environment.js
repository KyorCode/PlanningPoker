module.exports = function(app,express,settings){

    function logErrors(err, req, res, next) {
        console.error(err.stack);
        next(err);
    };

    function clientErrorHandler(err, req, res, next) {
        if (req.xhr) {
            res.send(500, {error: 'You killed it!'});
        }
        else {
            next(err);
        }
    };

    function errorHandler(err, req, res, next) {
        res.status(500);
        res.render('error', {error: err});
    };

    app.configure('development', function () {
        app.use(express.errorHandler({dumpExceptions: true, showStack: true}));
    });

    app.configure('production', function () {
        app.use(express.errorHandler());
    });

    app.set('views', settings.view);
    app.set('view engine', 'doT');
    app.engine('html', settings.doT.__express);
    app.use(express.bodyParser());
    app.locals.layout = false;
    app.use(express.static(settings.pub));
    app.use(logErrors);
    app.use(clientErrorHandler);
    app.use(errorHandler);
    app.use(app.router);

};