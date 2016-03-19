var server;
var ip = "127.0.0.1";
var port = 1111;
var http = require('http');
var cmd = require('node-cmd');

server = http.createServer(function(req, res){
	res.writeHead(200, {'Content=Type': 'text/plain'});
	res.end(<head><body><a href:"http://google.com/">Hello</a></body></head>);
});

server.listen(port, ip);
console.log("Server running at http://"+ip+":"+port);
cmd.run('xdg-open '+"http://"+ip+":"+port);
