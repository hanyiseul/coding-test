let input = require('fs').readFileSync('1152.txt').toString().trim().split('\n');

// 또한 문자열은 공백으로 시작하거나 끝날 수 있다.
if (input[0] === "") {
  console.log(0);
} else {
  console.log(input[0].trim().split(/\s+/).length);
}