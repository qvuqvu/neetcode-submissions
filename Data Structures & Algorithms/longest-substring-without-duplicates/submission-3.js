class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        // brute force

        // let res = 0;

        // "xyzx"
        //  0
        

        // for (let i = 0; i < s.length; i++) {
        //     let charSet = new Set();
        //     for (let j = i; j < s.length; j++) {
        //         if (charSet.has(s[j])) {
        //             break;
        //         }
        //         charSet.add(s[j]);
        //     }
        //     res = Math.max(res, charSet.size);
        // }
        // return res;


        let mp = new Map();
        let l= 0;
        let res = 0;

        for (let r = 0; r < s.length; r++) {
            if (mp.has(s[r])) {
                l = Math.max(mp.get(s[r]) + 1, l);
            }
            mp.set(s[r], r)
            res = Math.max(res, r - l + 1);
        }
        return res
    }
}
