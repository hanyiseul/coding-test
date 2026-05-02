class Solution {
    public int solution(int chicken) {
        int answer = 0;
        
        while(chicken >= 10) {
            int service = chicken / 10;
            answer += service;
            chicken = service + (chicken % 10);
        }
        return answer;
    }
}