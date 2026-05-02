function solution(n, numlist) {
    var answer = [];
    numlist.forEach(item => {
        if(item%n === 0) answer.push(item);
    })
    return answer;
}