const input = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
const [a, b] = input;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(Math.floor(a / b));
console.log(a % b);