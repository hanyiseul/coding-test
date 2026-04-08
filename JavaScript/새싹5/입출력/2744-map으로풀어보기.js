let input = require('fs').readFileSync('2744.txt').toString().trim().split('\n');


let result =""; 
for (let i = 0; i < input[0].length; i++) {
  const string = input[0][i]
  result += string === string.toUpperCase() ? string.toLowerCase() : string.toUpperCase()

}
  console.log(result)