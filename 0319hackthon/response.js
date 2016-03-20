var request = require('request');
var fs = require('fs');
var cmd = require('node-cmd');
var http = require('http');
var server,ip="192.168.230.79",port=1111;
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
			"sort":"pta",
			"token":token
			}
		},function(error, response, body){
			if(error){
				return console.log(err);
			}
			//console.log(body);
			fs.writeFile("page.txt",body,function(err){
				if(err){
					return console.log(err);
				}
				console.log("The file was save!")
			});
			fs.readFile('page.txt','utf8',function(err,data){
           			if(err){
                   			return console.log(err);
           			}
          			page = JSON.parse(data)["result"];
				server = http.createServer(function(req, res){
        				res.writeHead(200, {'Content=Type': 'text/plain'});
        				res.write('<!DOCTYPE html>\n');
        				res.write('<html lang="zh-cn">\n');
        				res.write('<head>\n');
        				res.write('<meta charset="utf-8">\n');
        				res.write('<title>NodeJS</title>\n');
        				res.write('</head>\n');
        				res.write('<body>');
					for(var i = 0; i<page.length; i++){
						//res.write('<a href='+ page[i]["link"]+'>'+page[i]["name"]+'</a><p>')
						res.write('<a href='+ "http://192.168.230.50:1137/" + i + '>'+page[i]["name"]+'</a><p>')
					}
        				res.write('</body>');
        				res.write('</html>\n');
        				res.end();
				});

				server.listen(port, ip);
				console.log("Server running at http://"+ip+":"+port);
				cmd.run('xdg-open '+"http://"+ip+":"+port);

				/*for(var i = 0; i<page.length; i++){
          				console.log(page[i]["name"]+": "+page[i]["link"]);
					cmd.run('xdg-open '+page[i]["link"]);
				}*/
			});

		});
});
