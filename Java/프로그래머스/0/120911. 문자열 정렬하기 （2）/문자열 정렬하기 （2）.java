import java.util.Arrays;
class Solution {
    public String solution(String my_string) {
        String answer = "";
        
        for(int i=0; i<my_string.length(); i++) {
            answer+=Character.toLowerCase(my_string.charAt(i));
        }
        char[] arr = answer.toCharArray();
        Arrays.sort(arr);

        return new String(arr);
    }
}