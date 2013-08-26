module.exports = function(io){

    io.configure(function () {
        io.set("transports", ["xhr-polling"]);
        io.set("polling duration", 10);
    });

};