const fs = require('fs');
const [a,b] = fs.readFileSync(0, 'utf8').trim().split(/\s+/);

console.log(Math.abs(a-b))