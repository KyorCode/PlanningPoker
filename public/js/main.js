var PlanningPoker = (function () {
    var root = this;

    requirejs.config({
        baseUrl: './js/app',
        paths:{
            'amplify':'.libs/amplify/lib/amplify',
            'jquery':'.libs/jquery/jquery',
            'socket.io':'/socket.io/socket.io'
        },
        shim:{
            'amplify':['jquery']
        }
    });

    function boot() {
        require(["bootstrapper"], function (bs) {
            bs.run();
        });
    }

    boot();
}());