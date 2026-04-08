let input = require('fs').readFileSync('11720.txt').toString().trim().split('\n');

console.log(input[1].split("").reduce((a,b) => a+Number(b),0))