let input = require('fs').readFileSync('2920.txt').toString().trim().split('\n'); 

// 조건문
// if(1부터 8까지 차례대로 연주한다면) {

//   console.log("ascending");
// } else if(8부터 1까지 차례대로 연주한다면) {

//   console.log("descending");
// } else {

//   console.log("mixed");
// }

// every((v, i) => ...)는 배열의 모든 요소가 조건을 만족하는지 확인하는 함수
// array.every((value, index) => 조건)

const arr = input[0].split(' ').map(Number)
if(arr.every((v, i) => v === i+1)) {
  console.log("ascending");
} else if(arr.every((v, i) => v === Math.max(...arr) - i)) {
  console.log("descending");
} else {
  console.log("mixed");
}