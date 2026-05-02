function solution(array, n) {
    let count = 0;
    
    array.forEach(item => {
        if(item === n) count++;
    })
    return count;
}