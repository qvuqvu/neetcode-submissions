class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {

        // "ABABAC" 



        // replace the char that is less frequent to make a substring that has singgle char
        // ---> create map to cal the freq of one char 
        // take the lenght of the winodow and minue the count of the most freq char  ---> hav e
        // the number or char to replace to make it valid (matcjh teh freq c)
        // and the number has be: <= k as long its truw the window (substring) is valid

        // how we know the most freq char
        // 

        const count = new Map();

        let l = 0;
        let maxF = 0;
        let res = 0;

        for (let r = 0; r < s.length; r++) {

            // the freq of the char
            count.set(s[r], (count.get(s[r]) || 0) + 1);
            // the most freq char
            maxF = Math.max(maxF, count.get(s[r]));

            // length of the window : r - l + 1

            while ((r - l + 1) - maxF > k) {
                // shrinnk the window
                count.set(s[l], count.get(s[l]) - 1);
                l++;
            }

            res = Math.max(res, r - l + 1)

        }

        return res;





    }
}
