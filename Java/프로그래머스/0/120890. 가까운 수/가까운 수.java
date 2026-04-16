class Solution {
    public int solution(int[] array, int n) {
        int answer = array[0];
        int diff = Math.abs(array[0] - n);
        
        for(int i=0; i < array.length; i++) {
            int minDiff = Math.abs(array[i] - n);
            
            if(diff > minDiff) {
                diff = minDiff;
                answer = array[i];
            } else if(diff == minDiff && answer > array[i]) {
                answer = array[i];    
            }
        }
        return answer;
    }
}