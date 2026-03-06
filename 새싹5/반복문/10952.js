const fs = require('fs');
const input = fs.readFileSync('10952.txt').toString().trim().split('\n');

for(let i = 0; i < input.length; i++) {
  // const [a,b] = input[i].split(' ').map(Number);
  // const [a,b] = input[i].split(' ');
  const [a,b] = input[i].split(' ');
  console.log(a,b)

  // if (a === 0 && b === 0) break;
  // console.log(a+b);
}