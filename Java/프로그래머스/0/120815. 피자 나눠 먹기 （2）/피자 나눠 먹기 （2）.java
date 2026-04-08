class Solution {
    // 최소공약수
    public static int gcd(int a, int b) {
        if (b == 0) return a;
        return gcd(b, a % b);
    }

    public int solution(int n) {
        return n / gcd(n,6);
    }
}