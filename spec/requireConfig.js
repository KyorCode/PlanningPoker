require.config({
    urlArgs: "bust=" + (new Date()).getTime(),
    baseUrl: 'public/js/app',
    paths:{
        'Squire':'../libs/squire/src/Squire'
    },
    callback: function () {
        define('jquery', [], function () {
            return window.jQuery;
        });
        define('amplify', [], function () {
            return window.amplify;
        });
    }
});