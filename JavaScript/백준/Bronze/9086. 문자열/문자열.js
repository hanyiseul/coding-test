let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let L = Number(input[0]);

for(let i = 1; i <= L; i++) {
  let str = input[i].trim();
  console.log(str[0]+str[str.length-1]);
}