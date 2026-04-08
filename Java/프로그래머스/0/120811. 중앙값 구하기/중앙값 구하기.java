class Solution {
    public int solution(int[] array) {
        int answer = 0;
        int temp;
        
        // 순서대로 정렬
        for(int i = 0; i < array.length; i++) {
            for(int j = i+1; j < array.length; j++) {
                if(array[i] > array[j]) {
                    temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }
        }
        
        // 정렬한 배열의 가운데 값
        answer = array[array.length/2];
        return answer;
    }
}