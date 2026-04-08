let input = require('fs').readFileSync('2475.txt').toString().trim().split('\n');



console.log("input : ", input)
console.log("input[0] : ", input[0])
console.log("input[0] : ", );

let arr = input[0].split(" ").map(Number)

console.log(arr.reduce((acc, cur) => (cur*cur) + acc, 0))