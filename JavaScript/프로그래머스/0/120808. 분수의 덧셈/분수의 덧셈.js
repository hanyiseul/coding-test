function num (a,b) {
    if(b === 0) return a;
    return num(b, a%b);
}
function solution(numer1, denom1, numer2, denom2) {
    const num1 = ((numer1 * denom2) + (numer2 * denom1));
    const num2 = denom1 * denom2;
    
    let number = num(num1, num2);
    return [num1/number, num2/number];
}