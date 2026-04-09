class Solution {
    public int solution(int hp) {
        int answer = 0;
//         int num1 = 0;
//         int num2 = 0;
//         int num3 = 0;
        
//         num1 = hp/5;
//         num2 = (hp%5)/3;
//         num3 = ((hp%5)%3);
        
        answer = hp/5 + (hp%5)/3 + ((hp%5)%3);
        
        return answer;
    }
}