define(['module.login', 'amplify'], function (Login, amplify) {
    "use strict";

    describe("Login module", function () {
        beforeEach(function () {
            this.loginModule = new Login('Tom');
        });

        afterEach(function () {
            delete this.loginModule;
        });

        describe("Constructor", function () {
            it("should be an instance of Login", function () {
                expect(this.loginModule).to.be.an.instanceof(Login);
            });

            it("should have set the name", function () {
                expect(this.loginModule.getName()).to.equal('Tom');
            });
        });
    })
});