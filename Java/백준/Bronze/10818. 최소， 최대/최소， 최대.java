import java.util.*;
import java.lang.*;
import java.io.*;

// The main method must be in a class named "Main".
class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // 배열의 크기 입력
        int A = sc.nextInt();  // 배열의 크기 A를 입력받음
        
        // 크기가 A인 배열 선언
        int[] arr = new int[A];  

        // 배열의 각 값을 입력받아서 arr에 저장
        for (int i = 0; i < A; i++) {
            arr[i] = sc.nextInt();  // 각 배열의 요소 값을 입력받아 저장
        }

        Arrays.sort(arr);
        System.out.println(arr[0]+" "+arr[A - 1]);

    }
}
