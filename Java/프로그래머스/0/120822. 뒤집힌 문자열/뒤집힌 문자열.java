class Solution {
    public String solution(String my_string) {
        String[] result = my_string.split("");
        
        String answer = "";
        for(int i = 0; i < result.length; i++) {
            answer += result[result.length -1 -i];
        }
        return answer;
    }
}