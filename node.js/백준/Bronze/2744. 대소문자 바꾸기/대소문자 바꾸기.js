let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let result =""; 
for (let i = 0; i < input[0].length; i++) {
  const string = input[0][i]
  result += string === string.toUpperCase() ? string.toLowerCase() : string.toUpperCase()

}
  console.log(result)