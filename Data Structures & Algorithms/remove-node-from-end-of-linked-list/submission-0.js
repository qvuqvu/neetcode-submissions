/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {

        const dummy = new ListNode(0, head);
        let left = dummy;
        let right = head;
        // looop for moving the right ptr
        while (n > 0 && right) {
            right = right.next;
            n--;
        }

        // loopo for movieng the l

        while (right) { // until right reaches the end
            left = left.next;
            right = right.next;
        }

        // delete the node --> move ptr 2 times


        left.next = left.next.next;


        return dummy.next;
    }
}
