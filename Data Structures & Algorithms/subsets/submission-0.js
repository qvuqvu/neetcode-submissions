class Solution {
    dfs(nums, i, subset, res) {
        if (i >= nums.length) {
            res.push([...subset]);
            return;
        }
        // decision to add the nums[i]
        subset.push(nums[i]);
        this.dfs(nums, i + 1, subset, res);

        // decision NOT to include the nums
        subset.pop();
        this.dfs(nums, i + 1, subset, res)
    }

    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let res = [];
        const subset = [];
        this.dfs(nums, 0, subset, res);
        return res;
    }
}
