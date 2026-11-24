/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {

        //BFS

        // if (!root) {
        //     return null;
        // }
        // const queue = new Queue([root]);

        // while (queue.size() > 0) {
        //     let node = queue.pop();
        //     [node.left, node.right] = [node.right, node.left];
        //     if (node.left != null) {
        //         queue.push(node.left);
        //     }
        //     if (node.right != null) {
        //         queue.push(node.right);
        //     }
        // }
        // return root;

        //DFS

        if (!root) {
            return null;
        }

        [root.left, root.right] = [root.right, root.left]

        this.invertTree(root.left);
        this.invertTree(root.right);

        return root;

    }
}
