let input = require('fs').readFileSync('10951.txt').toString().split('\n');


for(let i = 0; i < input.length; i++) {
  const [a,b] = input[i].split(' ').map(Number);

  if (a === 0 && b === 0) break;
  console.log(a+b);
}