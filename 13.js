const http = require('http')
const url = require('url')

const port = process.argv[2]

const server = http.createServer(function(req, res){
  if(req.method !== 'GET')
    return res.end('Please send me a GET request \n')

  var parsed_url = url.parse(req.url, true)

  if(parsed_url.pathname == '/api/parsetime'){
    res.writeHead(200, { 'Content-Type': 'application/json' })
    var date = new Date(parsed_url.query['iso'])
    res.end(JSON.stringify({
      hour : date.getHours(),
      minute : date.getMinutes(),
      second : date.getSeconds()
    }))
  }else if(parsed_url.pathname == '/api/unixtime'){
    res.writeHead(200, { 'Content-Type': 'application/json' })
    var date = new Date(parsed_url.query['iso'])
    res.end(JSON.stringify({
      unixtime : date.getTime() 
    })) 
  }else{
    res.writeHead(404)
    return res.end()
  }
});

server.listen(port)
