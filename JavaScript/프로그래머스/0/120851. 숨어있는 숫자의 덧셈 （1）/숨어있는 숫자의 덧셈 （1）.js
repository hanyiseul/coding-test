function solution(my_string) {
    var answer = 0;
    my_string.split("").forEach(item => {
        if (!isNaN(item)) {
            answer += parseInt(item);
        }
    })
    return answer;
}