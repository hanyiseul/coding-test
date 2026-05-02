function solution(sides) {
    var answer = 0;
    
    let max = Math.max(...sides);
    let index = sides.indexOf(max);
    
    if (index !== -1) {
      sides.splice(index, 1);
    }
    
    const result = sides.reduce((acc, cur) => cur += acc, 0);

    if(result > max) return 1;
    if(max >= result) return 2;
}