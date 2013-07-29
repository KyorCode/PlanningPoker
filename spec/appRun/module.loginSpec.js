define(['Squire', 'amplify'], function (Squire, amplify) {
    var injector = new Squire();

    describe('Login module', function () {
        describe('required', function () {
            it('should have been specified', function () {
                expect(require.specified('module.login')).toBeTruthy();
            });

            it('should require have required the login module', function () {
                var squire = new Squire();
                squire.require(['module.login'], function (module) {
                    expect(module).toBeDefined();
                });
            });
        });

        describe('init', function () {
            it ('should initialize the amplify requests', function () {
                spyOn(amplify.request, 'define');
                var squire = new Squire();
                squire.require(['module.login'], function (module) {
                    expect(amplify.request.define).toHaveBeenCalled();
                });
            }) ;
        });
    });
});
