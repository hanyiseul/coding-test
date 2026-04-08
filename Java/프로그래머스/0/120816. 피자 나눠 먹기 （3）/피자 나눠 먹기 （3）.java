class Solution {
    public int solution(int slice, int n) {
        
        int answer = 0;
        
        if(n > slice) { // 만약 사람이 슬라이드조각보다 많으면
            answer = n%slice == 0 ? n/slice : n/slice+1; 
        } else {
            answer = 1;
        }
        return answer;
    }
}