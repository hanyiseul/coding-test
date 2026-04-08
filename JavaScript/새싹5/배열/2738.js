let input = require('fs').readFileSync('2738.txt').toString().trim().split('\n');

// N*M크기의 두 행렬 A와 B가 주어졌을 때, 두 행렬을 더하는 프로그램을 작성하시오.

const [n, m] = input[0].split(" ").map(Number); // input[0][0]xinput[0][1]배열


// for (행)
for(let i = 1; i <= n; i++) {
  const a = input[i].split(" ").map(Number);
  const b = input[i + n].split(" ").map(Number)
  let result = [];
  // for (열)
  for(let j = 0; j < m; j++) {
    // 더하기
    result.push(a[j] + b[j])
  }
  console.log(result);
}


