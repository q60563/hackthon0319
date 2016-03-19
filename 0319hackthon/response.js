var request = require('request');
var fs = require('fs');
var cmd = require('node-cmd');
var token;
var page=[];
fs.readFile('token.txt','utf8',function(err,data){
	if(err){
		return console.log(err);
	}
	token = JSON.parse(data)["result"]["token"];
	console.log(token);

	request.post({
		url:	"https://api.ser.ideas.iii.org.tw:443/api/fb_fanpage_search",
		form:	{
			"keyword":"新聞",
			"limit":10,
			"sort":"id",
			"token":token
			}
		},function(error, response, body){
			//console.log(body);
			fs.writeFile("page.txt",body,function(err){
				console.log("The file was save!")
			});
			fs.readFile('page.txt','utf8',function(err,data){
           			if(err){
                   			return console.log(err);
           			}
          			page = JSON.parse(data)["result"];
				for(var i = 0; i<page.length; i++){
          				console.log(page[i]["name"]+": "+page[i]["link"]);
					cmd.run('xdg-open '+page[i]["link"]);
				}
			});

		});
});
