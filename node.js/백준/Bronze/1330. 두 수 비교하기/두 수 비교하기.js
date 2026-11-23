const input = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
const [a, b] = input;

if(a>b) {
    console.log(">");
} else if(a<b) {
    console.log("<");
} else {
    console.log("==");
}