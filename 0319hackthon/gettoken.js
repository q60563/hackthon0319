var request = require('request');
var fs = require('fs');

request.post({
	url:	"https://api.ser.ideas.iii.org.tw:443/api/user/get_token",
	form:	{
		"id":"youID",
		"secret_key":"youKEY"
		}
	},function(error, response, body){
        	
                console.log(body);
                fs.writeFile("token.txt", body, function(err){
                console.log("The file was save!");
                }); 
                   

});

