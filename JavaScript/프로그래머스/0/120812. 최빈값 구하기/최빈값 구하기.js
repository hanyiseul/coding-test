function solution(array) {
    let count = {};

    for (let i = 0; i < array.length; i++) {
        count[array[i]] = (count[array[i]] || 0) + 1;
    }
    
    let max = Math.max(...Object.values(count));
    let same = Object.values(count).filter(v => v === max).length;

    for (let key in count) {
        if (count[key] === max) {
            console.log(count[key])
            return same > 1 ? -1: Number(key);
        }
    }
}