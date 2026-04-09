import java.util.*;
import java.lang.*;
import java.io.*;

// The main method must be in a class named "Main".
class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // int A = sc.nextInt();

     
        int [] arr = new int[9];
        int maxNumber = 0;
        int position = 0;

        for(int i = 0; i < 9; i++) {
            arr[i] = sc.nextInt();

            if(arr[i] > maxNumber) {
                maxNumber = arr[i];
                position = i + 1;
            }
        }

        System.out.println(maxNumber);
        System.out.println(position);
        

    }
}
