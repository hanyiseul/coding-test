const input = require('fs').readFileSync('/dev/stdin').toString().trim();

console.log(input === "" ? 0 : input.split(/\s+/).length);