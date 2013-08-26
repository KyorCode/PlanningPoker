module.exports = function (app) {
    app.get('/', function (req, res) {
        var templateData = {title: "test"};
        res.render('index.html', templateData);
    });
};