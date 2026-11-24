class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        const set = new Set();

        for (const s of nums) {

            if (set.has(s)) {
                return true;
            }

            set.add(s);
        }


        return false


    }
}
