import java.util.Arrays;

class Solution {
    public int solution(int[] array) {

        int[] count = new int[1000]; // 원소가 0 ~999니까 

        for(int i = 0; i < array.length; i++) {
            count[array[i]]++; // count[i]번째에 해당하면 +1
        }
        
        int max = 0;
        int maxCount = 0; // 최빈값 체크
        int mode = 0;
        // 일단 각 항목별 등장횟수 체크 후
        for(int i = 0; i < count.length; i++){
            if(count[i] > max ) {
                max = count[i];
            }
        }
        // 최빈값 확인
        for(int i = 0; i < count.length; i++){
            if(count[i] == max ) {
                mode = i; // 최빈값 저장
                maxCount++;
            }
        }
        
        if(maxCount >= 2) {
            return -1;
        } else {
            return mode;
        }
    }
}