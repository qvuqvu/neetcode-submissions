class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {

        if (t === '') return '';


        let countT = new Map();
        let window = new Map();

        // add freq for each char in countT
        for (let c of t) {
            countT.set(c, (countT.get(c) || 0) + 1);
        }

        let have = 0;
        let need = countT.size;
        let res = [-1, -1] ///?
        let resLen = Infinity;
        let l = 0;

        for (let r = 0; r < s.length; r++) {

            // calculate the freq of the c in the windown
            let c = s[r];
            window.set(c, (window.get(c) || 0) + 1);

            if (countT.get(c) && window.get(c) === countT.get(c)) {
                have++;
            }

            while (have === need) {
                if (r - l + 1 < resLen) {
                    resLen = r - l + 1;
                    res = [l, r];
                }

                window.set(s[l], window.get(s[l]) - 1);
                //--> shrink the window if we get the smaller window
                if (countT.get(s[l]) && window.get(s[l]) < countT.get(s[l])) {
                    have--;
                }
                l++;

            }


        }

        return resLen === Infinity ? '' : s.slice(res[0], res[1] + 1)



    }
}
