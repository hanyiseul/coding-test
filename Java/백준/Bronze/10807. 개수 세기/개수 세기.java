import java.util.*;
import java.lang.*;
import java.io.*;

// The main method must be in a class named "Main".
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int A = sc.nextInt();
        int[] arr = new int[A];

        for (int i = 0; i < A; i++) {
            arr[i] = sc.nextInt();
        }
        
        int C = sc.nextInt();
        int count = 0;
        for(int i = 0; i < A; i++) {
            if(arr[i] == C) {
                count++;
            }
        }

        System.out.println(count);
    }
}