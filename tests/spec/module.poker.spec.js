define(['module.poker', 'socket.io'], function (Poker, io) {
    "use strict";

    var socketUrl = 'http://localhost:35728';

    var options = {
        transports: ['websocket'],
        'force new connection': true
    };

    var user1 = {name:'Tom'};
    var user2 = {name:'Stino'};
    var user3 = {name:'Math'};

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