define('bootstrapper',['Overrides','poker'],function(overrides,Poker){

    var run = function(){
        overrides.init();
    };

    return{
        run : run
    };
});