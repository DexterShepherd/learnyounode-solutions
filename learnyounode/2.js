var args = process.argv.slice(2)

args = args.map(function(i){
  return Number(i);
})

var sum = args.reduce(function(last_i, i){
  return last_i + i; 
});

console.log(sum);
