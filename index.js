//import dependencies
var http = require('http');
var url = require('url');

//create server
var server = http.createServer(function(req,res){

  res.end("Hello World");
});
//server response
server.listen(3000,function(){
  console.log('server is running on port 3000');
});
