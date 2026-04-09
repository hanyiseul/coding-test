import java.util.*;
import java.lang.*;
import java.io.*;

// The main method must be in a class named "Main".
public class Main {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();

        String str;
        for(int i = 0; i < t; i++) {
            str = sc.next();
            int sum = 0;
            int cnt = 0;
            for(int j = 0; j<str.length(); j++) {
                if(str.charAt(j) == 'O') {
                    cnt++;
                    sum += cnt;
                } else {
                    cnt = 0;
                }
            }
            System.out.println(sum);            
        }
    }
}