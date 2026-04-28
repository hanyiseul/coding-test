class Solution {
    public int solution(int[] numbers) {
       int max = Integer.MIN_VALUE; // int 타입이 가질 수 있는 가장 작은 값(최솟값)
       for(int i = 0; i < numbers.length - 1; i++) {
            for(int j = i + 1; j < numbers.length; j++) {
                int product = numbers[i] * numbers[j];
                if(product > max) {
                    max = product;
                }
            }
        }
        return max;
    }
}