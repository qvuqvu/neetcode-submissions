class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {

        let l = 0;
        let r = nums.length - 1;

        // its less or equal :
        // [1] and target 2 --> l = M + 1 --> l = 1 and r = 0 --> end if 
        while (l <= r) {

            let m = Math.floor((l + r) / 2);

            if (nums[m] > target) {
                r = m - 1;
            } else if (nums[m] < target) {
                l = m + 1;
            } else { return m };



        }
        return -1;



    }
}
