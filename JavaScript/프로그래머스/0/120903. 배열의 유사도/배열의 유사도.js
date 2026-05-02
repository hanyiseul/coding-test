function solution(s1, s2) {
    let count = 0;
    
    for(i=0; i<s2.length; i++) {
        for(j=0; j<s1.length; j++) {
            if(s2[i] == (s1[j])) {
               count++; 
            }
        }
    }
    return count++;
}