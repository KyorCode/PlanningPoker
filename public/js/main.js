PlanningPoker = (function () {
    var root = this;

    requirejs.config({
        baseUrl: './js/libs',
        paths: {
            "app": '../app'
        }
    });

    function defineLibraries() {
        define('amplify', [], function () {
            return root.amplify;
        });
    }

    function boot() {
        require(["app/bootstrap"], function (bs) {
            bs.run();
        });
    }

    defineLibraries();
    boot();
}());