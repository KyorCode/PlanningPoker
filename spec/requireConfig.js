require.config({
    urlArgs: "bust=" + (new Date()).getTime(),
    baseUrl: 'public/js/app',
    paths:{
        'Squire' : 'public/js/libs/Squire.js/src/Squire.js'
    }
});