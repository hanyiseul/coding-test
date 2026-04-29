class Solution {
    public int solution(int[] sides) {
        
        int max = Math.max(sides[0], sides[1]);
        int min = Math.min(sides[0], sides[1]);
        
        
        int answer = (sides[0]+sides[1]) - (max-min) - 1;
        
        
        return answer;
    }
}

