class Solution {
    public int solution(int i, int j, int k) {
        int answer = 0;
        for(; i <= j; i++) {
            String s = String.valueOf(i);
            for(int n = 0; n < s.length(); n++) {
                if(s.charAt(n) - '0' == k) answer++;
            }
        }
        return answer;
    }
}