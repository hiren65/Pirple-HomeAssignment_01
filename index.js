//import dependencies
var http = require('http');
var url = require('url');

//create server
var server = http.createServer(function(req,res){
  //get parsed string using module url.parse()
  var parsedUrl = url.parse(req.url,true);
  //get path
  var path = parsedUrl.pathname;
  //using regex trimme path
  var trimmedPath = path.replace(/^\/+|\/+$/g,"");

  res.end("Hello World");
  console.log("trimmedPath " + trimmedPath);
});
//server response
server.listen(3000,function(){
  console.log('server is running on port 3000');
});
