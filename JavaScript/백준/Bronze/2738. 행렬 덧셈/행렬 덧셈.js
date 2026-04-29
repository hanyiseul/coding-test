let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');


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
  console.log(result.join(" "));
}

