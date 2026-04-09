let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
console.log(input[1].split("").reduce((a,b) => a+Number(b),0))