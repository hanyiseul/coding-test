class Solution {
    public int solution(int[][] dots) {
        if (check(dots[0], dots[1], dots[2], dots[3])) return 1;
        if (check(dots[0], dots[2], dots[1], dots[3])) return 1;
        if (check(dots[0], dots[3], dots[1], dots[2])) return 1;
        
        return 0;
    }
    
    boolean check (int[] a, int[] b, int[] c, int[] d) {
        return (b[1] - a[1]) * (d[0] - c[0]) == 
               (d[1] - c[1]) * (b[0] - a[0]);
    }
}