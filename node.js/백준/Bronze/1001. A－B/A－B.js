const fs = require("fs");

const [a,b] = fs.readFileSync("/dev/stdin").toString().split(' ').map(v=>parseInt(v,10));

console.log(a-b);