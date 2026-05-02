class Solution {
    int gcd(int a, int b) {
        if (b == 0) return a;
        return gcd(b, a % b);
    }

    public int solution(int a, int b) {
        int answer = 0;
        
        int gcd = gcd(a,b);
        b /= gcd;
        
        while(b%5==0) {
            b/=5;
        }
        while(b%2==0) {
            b/=2;
        }
        
        return b == 1 ? 1 : 2;    
    }
}