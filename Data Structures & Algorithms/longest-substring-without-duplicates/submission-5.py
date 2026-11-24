class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        

        last_idx = {}  # char -> last seen position 
        left = 0
        max_len = 0

        for right, ch in enumerate(s):
            # if ch was seen insdide the cur window, move left past it

            if ch in last_idx and last_idx[ch] >= left:
                left = last_idx[ch] + 1
            
            last_idx[ch] = right
            max_len = max(max_len, right - left + 1)

        return max_len
