function solution(age) {
    return String(age).split('').map(item=> String.fromCharCode(Number(item) + 97)).join('');
}