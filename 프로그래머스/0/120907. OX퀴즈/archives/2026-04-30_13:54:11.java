class Solution {
    public String[] solution(String[] quiz) {
        String[] answer = new String[quiz.length];
        
        for(int i = 0; i < quiz.length; i++) {
            String[] arr = quiz[i].split(" ");
            
            int arr1 = Integer.parseInt(arr[0]);
            String arr2 = arr[1];
            int arr3 = Integer.parseInt(arr[2]);
            int result = Integer.parseInt(arr[4]);
            
            int calc = 0;
            
            if(arr2.equals("+")) {
                calc = arr1 + arr3;
            } else {
                calc = arr1 - arr3;
            }
            
            if(calc == result) {
                answer[i] = "O";
            } else {
                answer[i] = "X";
            }
        }
        
        return answer;
    }
}