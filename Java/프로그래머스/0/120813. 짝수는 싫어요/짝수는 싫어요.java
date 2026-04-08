class Solution {
    public int[] solution(int n) {
        int[] answer = new int[(n+1)/2]; // n이 홀수일 경우 올려주려고 +1
        int index = 0; // 배열 순서 인덱스 값 초기화
        for(int i = 0; i <= n; i++) {
            if(i%2!=0) { // i 홀수일 경우 
                answer[index] = i; // 배열에 i를 더해주고
                index++; // 인덱스 증가시키기
            }
        }
        return answer;
    }
}