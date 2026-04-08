let input = require('fs').readFileSync('31403.txt').toString().trim().split('\n');

const A = input[0].trim();
const B = input[1].trim();
const C = input[2].trim();

console.log(Number(A) + Number(B) - Number(C));
console.log(Number(A + B) - Number(C));