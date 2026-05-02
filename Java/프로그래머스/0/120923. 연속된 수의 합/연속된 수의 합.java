class Solution {
    public int[] solution(int num, int total) {
        int x = (total - num*(num-1)/2) / num; // 등차수열 계산법
        int[] answer = new int[num];

        for (int i = 0; i < num; i++) {
            answer[i] = x + i;
        }
        return answer;
    }
}