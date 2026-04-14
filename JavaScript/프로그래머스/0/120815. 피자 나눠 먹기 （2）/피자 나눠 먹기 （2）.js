function gcb(a,b) {
    if(b === 0) return a;
    return gcb(b, a % b);
}

function solution(n) {
    return n / gcb(n, 6);
}