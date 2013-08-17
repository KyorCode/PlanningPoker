define(['module.poker'], function (Poker) {
    "use strict";

    describe("Poker module", function () {
        beforeEach(function () {
            this.pokerModule = new Poker();
        });

        afterEach(function () {
            delete this.pokerModule;
        });

        describe("Constructor", function () {
            it("should be an instance of Poker", function () {
                expect(this.pokerModule).to.be.an.instanceof(Poker);
            });
        });
    });
});