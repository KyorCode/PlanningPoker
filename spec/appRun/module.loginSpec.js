describe('Login module', function () {
    var amplifyStub, requestStub, readyLoginModule = null;

    beforeEach(function () {
        requestStub = { define: function (sourceId, requesttype, hashsettings) {
        }};

        amplifyStub = { request: requestStub};

        spyOn(requestStub, 'define');
        define('amplify', [], amplifyStub);

        define(['module.login'], function (loginModule) {
            console.log(loginModule);
            readyLoginModule = loginModule;
        });
    });

    it('should have been specified',function(){
       expect(require.specified('module.login')).toBeTruthy();
    });

    it('should initialize amplify requests', function () {
        expect(requestStub.define).toHaveBeenCalled();
    });
});