var http = require('http');
var httpProxy = require('http-proxy');
var express = require('express');

httpProxy.createProxyServer(
	{target: process.env.API_URL}).listen(8001); 

httpProxy.createProxyServer({
	target: process.env.WEBSOCKET_URL,
	ws: true
	}).listen(8002);
	
var app = express();
app.use(express.static('.'));
app.listen(8080);