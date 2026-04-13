class Solution {
    public int solution(int n) {
        int answer = 1;
        int num = 1;
        
        while(answer <= n) {
            answer *= num;
            if(answer > n) {
                return num-1;
            }
            num++;
        }
        return num-1;
    }
}