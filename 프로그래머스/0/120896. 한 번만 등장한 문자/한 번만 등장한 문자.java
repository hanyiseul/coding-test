import java.util.Arrays;
class Solution {
    public String solution(String s) {
        String answer = "";
        
        for(int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            int count = 0;
            
            for(int j = 0; j < s.length(); j++) {
                if(c == s.charAt(j)) {
                    count++;
                }
            }
            if(count == 1) {
                answer += c;
            }
        }
        char[] arr = answer.toCharArray();
        Arrays.sort(arr);
        
        return new String(arr);
    }
}