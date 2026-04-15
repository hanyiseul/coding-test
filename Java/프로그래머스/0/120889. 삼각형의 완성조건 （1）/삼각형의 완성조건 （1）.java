class Solution {
    public int solution(int[] sides) {
        int max = 0;
        int sum = 0;
        
        for(int item : sides) {
            if(item > max) {
                max = item;
            } 
            sum += item;
        }
        return (sum-max) > max ? 1 : 2; 
    }
}