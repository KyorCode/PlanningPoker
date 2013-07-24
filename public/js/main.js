PlanningPoker = (function () {
    var root = this;

    requirejs.config({
        baseUrl: './js/app'
    });

    function defineLibraries() {
        define('amplify', [], function () {
            return root.amplify;
        });
    }

    function boot() {
        require(["bootstrap"], function (bs) {
            bs.run();
        });
    }

    defineLibraries();
    boot();
}());