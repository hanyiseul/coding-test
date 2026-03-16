let input = require('fs').readFileSync('9086.txt').toString().trim().split('\n');

for(let i = 1; i < input.length; i++) {
  let str = input[i].trim();
  console.log(str[0]+str[str.length-1]);
}