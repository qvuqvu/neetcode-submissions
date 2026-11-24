class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {

        // map each course to prereq list
        const preMap = new Map();
        for (let i = 0; i < numCourses; i++) {
            preMap.set(i, [])
        }

        for (let [crs, pre] of prerequisites) {
            preMap.get(crs).push(pre)
        }

        // visit set = all courses along the curr DFS path
        const visitSet = new Set();
        const dfs = (crs) => {
            if (visitSet.has(crs)) {
                return false;
            }
            if (preMap.get(crs).length === 0) {
                return true
            }

            visitSet.add(crs);

            for (let pre of preMap.get(crs)) {
                if (!dfs(pre)) {
                    return false;
                }
            }
            visitSet.delete(crs);

            preMap.set(crs, []);
            return true;


        }

        for (let c = 0; c < numCourses; c++) {
            if (!dfs(c)) {
                return false;
            }
        }
        return true;

    }
}
