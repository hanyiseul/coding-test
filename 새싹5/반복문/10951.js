let input = require('fs').readFileSync('10951.txt').toString().split('\n');

for(let i = 0; i < input.length; i++) {
  console.log(input[i]);
  // if(input[i] === '') continue;
  // const [a,b] = input[i].split(' ').map(Number);
  // console.log(a+b);
}