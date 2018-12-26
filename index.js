//import dependencies
var http = require('http');
var url = require('url');
var StringDecoder = require('string_decoder').StringDecoder;

//create server
var server = http.createServer(function(req,res){
  //get parsed string using module url.parse()
  var parsedUrl = url.parse(req.url,true);
  //get path
  var path = parsedUrl.pathname;
  //using regex trimme path
  var trimmedPath = path.replace(/^\/+|\/+$/g,"");
  //get query object i.e.{apple:'fruit'}
  var queryStringObject = parsedUrl.query;
  //get headers object
  var header = req.headers;
  // get method
  var method = req.method.toLowerCase();
  //get payload if any
  var decoder = new StringDecoder('utf-8');
  var buffer = "";
  //data event posting
  req.on('data',function(data){
      buffer += decoder.write(data);
  });
  req.on('end',function(){
     buffer += decoder.end();
     res.end("Hello World");
     console.log("buffer " + buffer);
  });


});
//server response
server.listen(3000,function(){
  console.log('server is running on port 3000');
});
