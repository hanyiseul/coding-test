let input = require('fs').readFileSync('15964.txt').toString().trim().split('\n');

let [a,b] = input[0].split(' ').map(Number);

console.log((a+b)*(a-b));