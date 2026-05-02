class Solution {
    public int[] solution(int[] numlist, int n) {
        
        for (int i = 0; i < numlist.length - 1; i++) {
            for (int j = i + 1; j < numlist.length; j++) {
                
                int diffA = Math.abs(numlist[i] - n);
                int diffB = Math.abs(numlist[j] - n);
                
                if (diffA > diffB || 
                   (diffA == diffB && numlist[i] < numlist[j])) {
                    
                    int temp = numlist[i];
                    numlist[i] = numlist[j];
                    numlist[j] = temp;
                }
            }
        }
        
        return numlist;
    }
}