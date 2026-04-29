let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n'); 
const arr = input[0].split(' ').map(Number)
if(arr.every((v, i) => v === i+1)) {
  console.log("ascending");
} else if(arr.every((v, i) => v === Math.max(...arr) - i)) {
  console.log("descending");
} else {
  console.log("mixed");
}