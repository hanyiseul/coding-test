class Solution {
    public String solution(int age) {
        String answer = "";
        String s = String.valueOf(age);
        
        for(int i = 0; i < s.length(); i++) {
            int num = s.charAt(i) - '0'; 
            answer += (char) ('a' + num);
        }
        
        return answer;
    }
}