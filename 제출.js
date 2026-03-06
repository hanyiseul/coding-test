let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');


// 첫 줄에 테스트케이스의 개수 T가 주어진다.
let t = input[0];
let result = ''; 

// 각 테스트케이스마다 A+B를 한 줄에 하나씩 순서대로 출력
for(let i = 1; i <= t; i++) {
  const [a,b] = input[i].split(' ').map(Number);

  result += (a+b)+'\n';
  // console.log((a+b)+'\n'); // 시간초과
}
  console.log(result)