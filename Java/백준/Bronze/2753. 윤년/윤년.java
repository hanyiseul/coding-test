import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int year = sc.nextInt();
        
        // 윤년 판단
        if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
            System.out.println(1); // 윤년일 경우
        } else {
            System.out.println(0); // 윤년이 아닐 경우
        }
        
    }
}
