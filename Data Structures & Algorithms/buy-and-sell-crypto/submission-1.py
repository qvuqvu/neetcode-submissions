class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        if not prices:
            return 0

        min_price = float('inf')
        max_profit = 0


        for price in prices:
            # update the lowest price seen so far
            if price < min_price:
                min_price = price

            # potential profit if we sell today

            profit = price - min_price
            if profit > max_profit:
                max_profit = profit

        return max_profit