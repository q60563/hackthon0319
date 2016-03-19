var cmd = require('node-cmd');
var prompt = require('prompt');
var url=null;
prompt.start();
prompt.get(['url'],function(err,result){
	url = result.url;
	loop();
});
function loop(){
	if(url!=null){
		cmd.run('xdg-open '+url);
	}
	else{
		setTimeout(loop,200);
	}
};
