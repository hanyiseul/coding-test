class Solution {
    public String solution(String polynomial) {
        String answer = "";
        String[] arr = polynomial.split(" \\+ ");
        int x = 0;
        int sum = 0;
        
        for(int i=0; i<arr.length; i++) {
            if(arr[i].contains("x")) {
                String xNum =  arr[i].replace("x", "");
                if(xNum.equals("")) {
                   x++; 
                }else {
                    x += Integer.parseInt(xNum);
                }
            } else {
                sum += Integer.parseInt(arr[i]);
            }
        }
        
        if(x != 0 && sum != 0) {
            if(x == 1) {
                answer = "x" + " + " + sum;
            } else {
                answer = x + "x" + " + " + sum;  
            };
        } else if (x !=0 && sum == 0){
            if(x == 1) {
                answer = "x";
            } else {
                answer = x + "x";
            }
        } else {
            answer = String.valueOf(sum);
        }
        return answer; 
    }
}