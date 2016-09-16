var http = require('http');

var resp = '';
http.get(process.argv[2], function(response){
  response.setEncoding('utf8');
  response.on('data', function(data){
    resp += data; 
  });

  response.on('end', function(data){
    console.log(resp.length);
    console.log(resp);
  });
});
