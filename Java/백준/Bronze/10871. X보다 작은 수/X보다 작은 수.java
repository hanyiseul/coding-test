import java.util.*;
import java.lang.*;
import java.io.*;

// The main method must be in a class named "Main".
class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // 첫번째 줄에서 N과 X 읽어오기

        int N = sc.nextInt();
        int X = sc.nextInt();

        // 조건에 맞는 값 찾기
        for(int i = 0; i < N; i++) {
            int num = sc.nextInt();
            if(num < X) {
                System.out.println(num);
            }
        } 
    }
}