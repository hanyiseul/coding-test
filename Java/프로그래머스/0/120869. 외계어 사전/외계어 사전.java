class Solution {
    public int solution(String[] spell, String[] dic) {
        for(String word : dic) {
            boolean ok = true;
            for(String s : spell) {
                if(!(word.contains(s))) {
                    ok = false;
                    break;
                }
            }
            if(ok) return 1;
        }
        return 2;
    }
}