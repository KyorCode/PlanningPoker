var request = require('http');

describe('When the root is called',function(){
    it('should return 200',function(done){
        request.get("http://localhost:35728",function(response){
            expect(response.statusCode).toBe(200);
            done();
        })
    });
})