import java.util.Scanner; // Scanner클래스는 자바에서 입력을 받을 때 사용

public class Main { // 클래스 단위로 구성
    public static void main(String[] args) { // 자바 프로그램의 진입점
        Scanner sc = new Scanner(System.in); // Scanner 객체 sc 생성
            // System.in을 인자로 넘겨주어 사용자로부터 콘솔 입력 받을 수 있음
        
        int A = sc.nextInt(); // nextInt() : 입력받은 정수
        int B = sc.nextInt(); 
    
        System.out.println(A*B); // A와 B를 곱한 결과를 콘솔에 출력
    }
}