let input = require('fs').readFileSync('2439.txt').toString().trim().split('\n');

for(let i = 1; i <= Number(input[0]); i++) {
  console.log(' '.repeat(Number(input[0])-i) + '*'.repeat(i));
}