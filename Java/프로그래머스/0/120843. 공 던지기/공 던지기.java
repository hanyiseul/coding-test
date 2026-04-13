class Solution {
    public int solution(int[] numbers, int k) {
        int answer = 0;
        
        return numbers[((k-1)*2) % numbers.length];
    }
}