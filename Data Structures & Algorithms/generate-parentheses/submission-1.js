class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    backtrack(openN, closeN, n, res, stack) {
        // when we have finished the valid paran
        if (openN === closeN && openN === n) {
            res.push(stack);
            return;
        }

        if (openN < n) {
            this.backtrack(openN + 1, closeN, n, res, stack + '(');
        }
        if (closeN < openN) {
            this.backtrack(openN, closeN + 1, n, res, stack + ')')
        }
    }

    generateParenthesis(n) {
        /// only add the paran if the open < n
        // only add a closing paran if close < open 
        let res = [];
        this.backtrack(0, 0, n, res, '');
        return res;

    }
}
