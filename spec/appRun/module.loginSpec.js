define(['Squire', 'amplify'], function (Squire, amplify) {
    var injector = new Squire();
    debugger;

    describe('Login module', function () {
        describe('required', function () {
            it('should have been specified', function () {
                expect(require.specified('module.login')).toBeTruthy();
            });

            it('should require have required the login module', function () {
                var squire = new Squire();
                squire.require(['login.module'], function (module) {
                    expect(module).toBeDefined();
                    done();
                });
            });
        });

        describe('init', function () {
            it ('should initialize the amplify requests', function () {
                spyOn(amplify.request, 'define');
                var squire = new Squire();
                squire.require(['login.module'], function (module) {
                    expect(amplify.request.define).toHaveBeenCalled();
                    done();
                });
            }) ;
        });
    });
});
