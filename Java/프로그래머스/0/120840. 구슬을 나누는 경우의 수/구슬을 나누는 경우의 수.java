class Solution {
    public double solution(int balls, int share) {
        double answer = 0;
        
        double n = 1;
        double m = 1;
        double nm = 1;
        
        for(int i = 1; i <= balls; i++) {
            n *= i;
        }
        for(int i = 1; i <= share; i++) {
            m *= i;
        }
        
        for(int i = 1; i <= (balls-share); i++) {
            nm *= i;
        }
        
        answer = n/(nm*m);
        return (int)Math.round(answer);
    }
}