class Solution {
    public int solution(String[] babbling) {
        int answer = 0;
        
        for(String b:babbling) {
            String temp = b;
            temp = temp.replaceAll("aya|ye|woo|ma"," ");
            temp = temp.replaceAll(" ", "");
            if(temp.equals("")) answer++;
            
        }
        
        return answer;
    }
}