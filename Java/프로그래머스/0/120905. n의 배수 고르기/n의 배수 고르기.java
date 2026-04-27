import java.util.*;
class Solution {
    public int[] solution(int n, int[] numlist) {
        List<Integer> list = new ArrayList<>();
        for(int num : numlist) {
            if(num%n==0){
                list.add(num);
            }
        }
        // list.stream() 리스트를 stream으로 변경
        // 람다식: mapToInt(Integer를 int로 변환)
        // i->i: 입력값 i를 그대로 반환
        // 처리한 값들을 배열로 반환
        return list.stream().mapToInt(i -> i).toArray();
    }
}