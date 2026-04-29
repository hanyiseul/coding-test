class Solution {
    public int solution(String my_string) {
        int answer = 0;
        String[] numbers = my_string.split("[^0-9]+");
        for(String num : numbers) {
            if(!num.equals("")) {
                answer += Integer.parseInt(num);
            }
        }
        return answer;
    }
}