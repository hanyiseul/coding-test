import java.util.ArrayList;
class Solution {
    public ArrayList<Integer> solution(int n) {
        ArrayList<Integer> tmpList = new ArrayList<>();
        
        while (n > 1) { 
            for (int i = 2; i <= n; i++) { 
                if (n % i == 0) { 
                    tmpList.add(i);
                    n /= i;
                    break;
                }
            } 
        }
        return tmpList;
    }
}