class Solution {
    public int gcd(int a, int b) { // 유클리드 호제법
        if(b == 0) return a;
        return gcd(b, a % b); // 재귀함수 (a % b)를 계속 하다가 (a % b)가 0이 되면 b 리턴)
    }
    public int[] solution(int numer1, int denom1, int numer2, int denom2) {
        int[] answer = new int[2]; // 분모, 분자만 나오니까 배열 길이는 2
        int a = (numer1 * denom2) + (numer2 * denom1); // 분자
        int b = denom1 * denom2; // 분모
        
        int g = gcd(a,b); // 최대 공약수
        
        answer[0] = a / g;
        answer[1] = b / g;
        return answer;
    }
}