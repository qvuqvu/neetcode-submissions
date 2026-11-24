class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {


        let l = 0;
        let r = matrix.length - 1; // nums of col == nums of row

        while (l < r) {
            for (let i = 0; i < (r - l); i++) {
                let top = l;
                let bottom = r;


                // save the top left 
                let topLeft = matrix[top][l + i];

                // move the bottom left into the top left 
                matrix[top][l + i] = matrix[bottom - i][l];

                // move bottom right into bottom left;
                matrix[bottom - i][l] = matrix[bottom][r - i];

                // move top righ tot bottom righ t
                matrix[bottom][r - i] = matrix[top + i][r]

                // move top left into top right
                matrix[top + i][r] = topLeft;

            }
            r -= 1;
            l += 1;
        }
        

    }
}
