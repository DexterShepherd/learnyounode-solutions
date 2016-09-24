var http = require('http');

var urls = process.argv.slice(2)
var finished = 0;
var resps = ['', '', ''];

urls.forEach(function(url, index){
  http.get(url, function(response){
    response.setEncoding('utf8') 
    response.on('data', function(data){
      resps[index] += data;
    });

    response.on('end', function(data){
      finished++; 
      if(finished == 3){
        resps.forEach(function(i){
          console.log(i);
        })
      }
    });
  });
});
