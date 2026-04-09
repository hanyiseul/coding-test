let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

for(let i = 0; i < input.length; i++) {
  if(input[i] === '') continue;
  const [a,b] = input[i].split(' ').map(Number);
  console.log(a+b);
}