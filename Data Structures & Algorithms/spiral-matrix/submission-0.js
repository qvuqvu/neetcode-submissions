class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {

        const res = [];
        let left = 0;
        let right = matrix[0].length; // easier to code this up 
        let top = 0;
        let bottom = matrix.length;


        while (left < right && top < bottom) {
            for (let i = left; i < right; i++) {
                res.push(matrix[top][i])
            }
            top++;
            for (let i = top; i < bottom; i++) {
                res.push(matrix[i][right - 1]);
            }
            right--;

            // check if the there no left colum eg. [[1,2,23,3] and one col matrix

            if (!(left < right && top < bottom)) {
                break;
            }

            for (let i = right - 1; i >= left; i--) {
                res.push(matrix[bottom - 1][i]);
            }
            bottom--;
            for (let i = bottom - 1; i >= top; i--) {
                res.push(matrix[i][left]);

            }
            left++
        }
        return res;
    }
}
