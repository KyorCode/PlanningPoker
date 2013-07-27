PlanningPoker = (function () {
    var root = this;

    requirejs.config({
        baseUrl: './js/app',
        paths:{
            'amplify':'.libs/amplifylib/amplify.js'
        },
        shim:{

        }
    });

    function boot() {
        require(["bootstrap"], function (bs) {
            bs.run();
        });
    }

    boot();
}());