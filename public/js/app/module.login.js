define('module.login', ['amplify'], function (amplify) {

    var init = function () {
        amplify.request.define('login', 'ajax', {
            url: 'something',
            dataType: ' jsonp',
            type: 'GET'
        })
    };

    init();

});