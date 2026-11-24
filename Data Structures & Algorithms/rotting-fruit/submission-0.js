class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const q = [];

        let fresh = 0;
        let time = 0;

        // pre-work: track how many fresh or rotten oranges 
        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[0].length; c++) {
                if (grid[r][c] === 1) {
                    fresh++;
                }

                if (grid[r][c] === 2) {
                    q.push([r, c]);
                }
            }
        }

        const directions = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0]
        ]

        while (fresh > 0 && q.length > 0) {
            const length = q.length;

            for (let i = 0; i < length; i++) {
                // pop the furthest left element

                const [currR, currC] = q.shift();
                // traverse the adjacent positions
                for (const [dr, dc] of directions) {
                    const row = currR + dr;
                    const col = currC + dc;

                    /// mark it as rotten --> add it to queue --> reduce the fresh by 1

                    if (
                        row >= 0 && row < grid.length && col >= 0 && col < grid[0].length && grid[row][col] === 1
                    ) {
                        grid[row][col] = 2;
                        q.push([row, col])
                        fresh--
                    }
                }
            }

            time++;
        }

        return fresh === 0 ? time : -1;


    }
}
