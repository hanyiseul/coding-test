let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let arr = input[0].split(" ").map(Number)

console.log((arr.reduce((acc, cur) => (cur*cur) + acc, 0)) % 10)