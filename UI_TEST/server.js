var express		= require('express');
var app			= express();
var fs = require('fs');
var port		= process.env.PORT || 8080;

app.use(function(req,res,next){
	//전처리..
	
	next();
});

app.route('/*').all(function (req,res, next){
	console.log("route : req.url="+req.url);
	if (req.url === '/') {
		res.sendfile('index.html');
	}else{
		fs.exists(__dirname+req.url, function (exist){
			if (exist)
				res.sendfile(__dirname+req.url);
			else
				res.end();
		});
	}
});

app.listen(port);
console.log('server on port '+port);

//add
