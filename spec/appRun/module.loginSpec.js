describe('Login module', function () {
    var amplifyStub, requestStub, readyLoginModule = null;

    beforeEach(function () {
        requestStub = { define: function (sourceId, requesttype, hashsettings) {
        }};

        amplifyStub = { request: requestStub};

        spyOn(requestStub, 'define');
        define('amplify', [], amplifyStub);

        define(['Squire'],function(Squire){
            var injector = new Squire();

            injector.require(['module.login'],function(module){
               console.log(module);
            },function(err){
                console.log(err);
            });
        });
    });

    it('should have been specified', function () {
        expect(require.specified('module.login')).toBeTruthy();
    });

    it('should initialize amplify requests', function () {
        expect(requestStub.define).toHaveBeenCalled();
    });
});
