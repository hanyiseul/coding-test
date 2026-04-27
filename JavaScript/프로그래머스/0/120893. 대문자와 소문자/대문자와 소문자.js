function solution(my_string) {
    var answer = '';
    my_string.split('').map(item=>{
        if(item === item.toLowerCase()) {
           answer += item.toUpperCase();
        } else {
           answer += item.toLowerCase();
        }
    })
    return answer;
}