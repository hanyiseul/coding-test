function solution(array, height) {
    let count = 0;
    
    array.forEach(item => {
        if(item > height) count++;
    })
    return count;
}