define('Login', ['amplify'], function (amplify) {

    function Login(name){
        this._name = name;
    };

    Login.prototype ={
        getName: function(){
           return this._name;
        }
    };

    return (Login);

});