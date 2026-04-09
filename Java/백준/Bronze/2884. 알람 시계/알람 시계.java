import java.util.*;
import java.lang.*;
import java.io.*;

// The main method must be in a class named "Main".
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // 입력받은 시간/분
        int H = sc.nextInt();
        int M = sc.nextInt();

        if(M < 45) {
            M = M+60 - 45;
            H = H - 1;
            if(H < 0) {
                H = 23;
            }
        } else {
            M = M - 45;
        }

        System.out.println(H + " " + M);
    }
}