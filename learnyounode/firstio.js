var fs = require('fs');  // makes full fs modue available in a variable fs

var contents = fs.readFileSync(process.argv[2])

var lines = contents.toString().split('\n').length - 1

console.log(lines)
