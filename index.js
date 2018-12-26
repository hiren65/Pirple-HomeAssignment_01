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
  //data event  posting
  req.on('data',function(data){
      buffer += decoder.write(data);
  });
  req.on('end',function(){
     buffer += decoder.end();
     //get and select handler that go to query founf or  not
     var choseHandler = typeof(router[trimmedPath]) !== 'undefined' ? router[trimmedPath] : handler.notFound;
     //construct data queryStringObject
     var data = {
            'trimmedPath':trimmedPath,
            'queryStringObject':queryStringObject,
            'header':header,
            'payload':buffer,
            'method':method
     }
     //Route the request to the handler  specified in the router
     choseHandler(data,function(statusCode,payload){
      //use the status code by the handler, or default to 200
            statusCode = typeof(statusCode) == 'number' ? statusCode : 200;
      //use the payload callback by the handler or default to an empty objejct
            payload = typeof(payload) == 'object' ? payload : {};
      // convert the payload to string
            var payloadString = JSON.stringify(payload);
      // return response
            res.writeHead(statusCode);
            res.end(payloadString);
            console.log('Returning this response ',statusCode,payloadString);

     });

  });


});
//server response
server.listen(3000,function(){
  console.log('server is running on port 3000');
});

//create handler
var handler = {};


//create router response handler
handler.hello = function(data,callback){
  callback(406,
               {
                'hello':'Hello How Are You? ',
                'name' : 'Hirenkumar ',
                'website' : "www.hirenkumar.com.au"
              }
          );
}
handler.notFound = function(data,callback){
  callback(404,{'no':'not found'});
}
//create router for parsed request
var router = {
    'hello':handler.hello,
    'no':handler.notFound
};
