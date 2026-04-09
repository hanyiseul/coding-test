let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

// 첫번째는 케이스 수
const test = parseInt(input[0]);


// 반복문?
for(let i = 1; i <= test; i++) {
  // 층, 방수, 손님 수
  let [H, W, N]= input[i].split(" ").map(Number);

  let floor = N % H === 0 ? H : N % H; // 나머지 연산
  let room = Math.ceil(N / H); // Math.ceil(숫자) 올림 연산 

  // 수학 연산 문제
  console.log(floor * 100 + room);
}