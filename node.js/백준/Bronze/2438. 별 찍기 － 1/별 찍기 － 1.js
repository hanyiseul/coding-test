let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let num = Number(input[0])

let star = '';

for(let i = 1; i <= num; i++) {
  star += '*'.repeat(i)+'\n'
}
console.log(star);


