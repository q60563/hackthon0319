var server;
var ip = "127.0.0.1";
var port = 1111;
var http = require('http');
var cmd = require('node-cmd');

server = http.createServer(function(req, res){
	res.writeHead(200, {'Content=Type': 'text/plain'});
	res.write('<!DOCTYPE html>\n');
	res.write('<html lang="zh-cn">\n');
	res.write('<head>\n');
	res.write('<meta charset="utf-8">\n');
	res.write('<title>NodeJS</title>\n');
	res.write('</head>\n');
	res.write('<body>');
	res.write('<a href="http://google.com">Google</a>')
	res.write('</body>');
	res.write('</html>\n');
	res.end();
});

server.listen(port, ip);
console.log("Server running at http://"+ip+":"+port);
cmd.run('xdg-open '+"http://"+ip+":"+port);
