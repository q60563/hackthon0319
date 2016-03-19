var request = require('request');
var fs = require('fs');

request.post({
	url:	"https://api.ser.ideas.iii.org.tw:443/api/user/get_token",
	form:	{
		"id":"7bf8d957b71c9431b046699c2569a2c1",
		"secret_key":"a3332778a64389f1b141fde63d0f95c0"
		}
	},function(error, response, body){
        	
                console.log(body);
                fs.writeFile("token.txt", body, function(err){
                console.log("The file was save!");
                }); 
                   

});

