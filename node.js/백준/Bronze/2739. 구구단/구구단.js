const input = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
const [N] = input;


for(let i=1; i <=9; i++) {
    console.log(`${N} * ${i} = ${N * i}`);  
}