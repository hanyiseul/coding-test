class Solution {
    public int solution(int n, int t) {
        // n * Math.pow(2, t) : n을 t번 2배 증가
        return (int) Math.pow(2,t) * n;
    }
}