import java.util.*;
import java.lang.*;
import java.io.*;

// The main method must be in a class named "Main".
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int A = sc.nextInt();

        for(int i = 1; i <= 9; i++) {
            System.out.println(A + " * " + i + " = " + A * i);
        }
    }
}