class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """

        slow = 0 # next position for a non zero element

        # 1st pass
        for fast in range(len(nums)):
            if nums[fast] != 0:
                nums[slow] = nums[fast]
                slow += 1
            
        # second pass
        for i in range(slow, len(nums)):
            nums[i] = 0
        

        

        