function solution(my_string) {
    var answer = '';
    my_string.split('').forEach(item => {
        if(item !== 'a' && item !== 'e' && item !== 'i' && item !== 'o' && item !== 'u') {
            answer += item;
        }
    })
    return answer;
}