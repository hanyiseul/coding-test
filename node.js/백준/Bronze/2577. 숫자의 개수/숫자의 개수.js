let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n'); 
// 1. A×B×C 계산 후 결과 숫자를 문자열로 변환
let result = String(input.reduce((a,b) => a * Number(b), 1)).split("");

// 2. 0~9 등장 횟수 세기 -> 순서대로 출력
for(let i = 0; i <= 9; i++) {
  console.log(result.filter(item => Number(item) === i).length)
}
