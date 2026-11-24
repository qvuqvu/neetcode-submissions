class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {

        // bruteforce try checking every substring of s2 if it is a permutation of s1 
        // 

        // s1 = s1.split("").sort().join("");

        // for (let i = 0; i < s2.length; i++) {
        //     for (let j = i; j < s2.length; j++) {
        //         let subSrt = s2.slice(i, j + 1).split('').sort().join('');
        //         if (subSrt === s1) {
        //             return true;
        //         }
        //     }
        // }

        // return false;

        // an optimal solution ---> hashmap

        let count1 = new Map();
        // count freq of c in s1
        for (let c of s1) {
            count1.set(c, (count1.get(c) || 0) + 1);
        }

        let need = count1.size;

        for (let i = 0; i < s2.length; i++) {
            let count2 = new Map();
            let cur = 0; // check the unique characters have the same freq

            for (let j = i; j < s2.length; j++) {
                let c = s2[j];
                count2.set(c, (count2.get(c) || 0) + 1);
 
                if ((count1.get(c) || 0) < count2.get(c)) {
                    break;
                }

                if ((count1.get(c) || 0) === count2.get(c)) {
                    cur++;
                }

                if (cur === need) {
                    return true;
                }


            }
        }

        return false;

    }
}
