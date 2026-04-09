let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');


let result = "";

for(let i = 0; i < input.length; i++) {
  result = input[i];
  console.log(result);
}