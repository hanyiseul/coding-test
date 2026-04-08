class Solution {
    public int[] solution(int[] num_list) {
        int odd = 0;
        int even = 0;
        int[] answer = new int[2];
        for(int i = 0; i < num_list.length; i++) {
            if(num_list[i] % 2 == 0) {
                even++;
            }
            if(num_list[i] % 2 != 0) {
                odd++;
            }
        }
        answer[0] = even;
        answer[1] = odd;
        return answer;
    }
}