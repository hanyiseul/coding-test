let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const A = input[0].trim();
const B = input[1].trim();
const C = input[2].trim();

console.log(Number(A) + Number(B) - Number(C));
console.log(Number(A + B) - Number(C));