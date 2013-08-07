var PlanningPoker = (function () {
    var root = this;

    requirejs.config({
        baseUrl: './js/app',
        paths:{
            'amplify':'.libs/amplify/lib/amplify',
            'jquery':'.libs/jquery/jquery'
        },
        shim:{
            'amplify':['jquery']
        }
    });

    function boot() {
        require(["bootstrap"], function (bs) {
            bs.run();
        });
    }

    boot();
}());