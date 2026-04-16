import java.util.Arrays;

class Solution {
    public int solution(int order) {
        int answer = 0;
        
        String[] arr = String.valueOf(order).split("");
        int[] intArr = Arrays.stream(arr).mapToInt(Integer::parseInt).toArray();
        
        for(int i = 0; i < intArr.length; i++) {
            if(intArr[i] == 3 || intArr[i] == 6  || intArr[i] == 9) {
                answer++;
            }
        }
        return answer;
    }
}