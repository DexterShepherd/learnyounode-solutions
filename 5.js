var fs = require('fs');

var type = process.argv[3];
var files = fs.readdir(process.argv[2], function(err, data){
  if(err){
    console.log(err);
  }else{
    data.forEach(function(i){
      if(i.endsWith("." + type)){
        console.log(i);
      }
    });
  }
});


