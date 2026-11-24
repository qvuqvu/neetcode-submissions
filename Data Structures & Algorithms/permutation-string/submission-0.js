class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {

        // bruteforce try checking every substring of s2 if it is a permutation of s1 
        // 

        s1 = s1.split("").sort().join("");

        for (let i = 0; i < s2.length; i++) {
            for (let j = i; j < s2.length; j++) {
                let subSrt = s2.slice(i, j + 1).split('').sort().join('');
                if (subSrt === s1) {
                    return true;
                }
            }
        }

        return false;
    }
}
