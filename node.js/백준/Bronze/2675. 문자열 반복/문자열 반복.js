let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n'); 

let line = Number(input[0]);
let result = "";

for(let i = 1; i <= line; i++) {
  let repeat = Number(input[i].split(" ")[0]);
  let char = input[i].split(" ")[1];
  for(let j = 0; j < char.length; j++) {
    for(let k = 0; k < repeat; k++) {
      result += char[j];
    }
  }
  result += '\n';
}
console.log(result.trim()); // 마지막에 개행이 붙지 않게 하기 위해