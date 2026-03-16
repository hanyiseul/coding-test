let input = require('fs').readFileSync('11718.txt').toString().trim().split('\n');

let result = "";

for(let i = 0; i < input.length; i++) {
  result = input[i];
  console.log(result);
}