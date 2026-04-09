class Solution {
    public int solution(int[] numbers) {
        int answer = 0;
        int result = 0;
        
        for(int i = 0; i < numbers.length; i++){
            for(int j = 0; j < numbers.length; j++) {
                if(numbers[i]*numbers[j] > result && i!=j) {
                    result = numbers[i]*numbers[j];
                }
            }
        }
        
        return result;
    }
}