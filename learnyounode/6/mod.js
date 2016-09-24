var fs = require('fs');

module.exports = function(dir, extension, callback){
  fs.readdir(dir, function(err, data){
    if(err){
      callback(err, data);
    }else{
      callback(null, data.filter(function(i){
        return i.endsWith('.' + extension);
      }));
    }
  });
}
