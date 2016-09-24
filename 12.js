var http = require('http')
var map = require('through2-map')

const port = Number(process.argv[2])

const server = http.createServer(function(req, res){
  if(req.method == 'POST'){
    res.writeHead(200, { 'content-type': 'text/plain' })
    req.pipe(map(function(input){
      return input.toString().toUpperCase()
    })).pipe(res);
  }else{
    return res.end('Send me a post \n') 
  }
});

server.listen(port);
