class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {

        // BRUTE FORCE


        // let res = 0;

        // for (let i = 0; i < heights.length; i++) {
        //     for (let j = i + 1; j < heights.length; j++) {

        //         let area = (j - i) * Math.min(heights[i], heights[j]);

        //         res = Math.max(res, area);
        //     }
        // }
        // return res;

        // --------------

        // right and left pointer --> to make area the biggest
        // decresase the r if the height[r] smaller and vicce versa

        let res = 0
        let l = 0;
        let r = heights.length - 1;


        while (l < r) {


            let area = (r - l) * Math.min(heights[r], heights[l]);

            res = Math.max(res, area);

            if (heights[r] < heights[l]) {
                r--;
            } else {
                l++;
            }




        }

        return res;




    }
}
