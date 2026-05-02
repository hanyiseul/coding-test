class Solution {
    public int solution(int[][] lines) {
        int answer = 0;

        for (int i = -100; i < 100; i++) {
            int count = 0;

            for (int[] line : lines) {
                if (line[0] <= i && i < line[1]) {
                    count++;
                }
            }

            if (count >= 2) answer++;
        }

        return answer;
    }
}