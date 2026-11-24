class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // sorted --> use pointers to shift right or left if the sum is 
        // smaller and bigger than the target

        let l = 0;
        let r = numbers.length - 1;


        while (l < r) {
        

            let curNum = numbers[l] + numbers[r];

            if (curNum > target) {
                r -= 1;
            } else if (curNum < target) {
                l += 1;
            } else if (curNum == target) {
                return [l + 1, r + 1]
            }
        }

        return []



    }
}
