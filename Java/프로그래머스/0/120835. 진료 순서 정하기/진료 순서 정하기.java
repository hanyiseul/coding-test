class Solution {
    public int[] solution(int[] emergency) {
        int[] answer = {};
        int[] rank = new int[emergency.length];
        
        for(int i = 0; i < rank.length; i++) {
            rank[i] = 1;
        }
        for(int i = 0; i < emergency.length; i++) {
            for(int j=0; j < emergency.length; j++) {
                if(emergency[j] > emergency[i]) {
                    rank[i]++;
                }
            }
        }
        
        return rank;
    }
}