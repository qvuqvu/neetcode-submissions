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
     * @return {void}
     */
    reorderList(head) {

        let slow = head;
        let fast = head.next;
        // fast not reach the last element
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;


        }
        // after the loop: wwe want to split 
        // the second half of the list 

        let second = slow.next;
        slow.next = null
        let prev = (slow.next = null);


        while (second) {
            // reverse
            let tmp = second.next;
            second.next = prev;
            prev = second;
            second = tmp;
        }

        // merge 2 halfs of the list;
        second = prev;
        let first = head;

        while (second) {
            const tmp1 = first.next;
            const tmp2 = second.next;
            first.next = second;
            second.next = tmp1;
            first = tmp1;
            second = tmp2;

            // first  -> 1 2 3 
            // second -> 5 4

            // tmp1 -> 2;
            // tmp2 -> 4;

            // 1 -> 5
            // 5 -> 2 now we have 1 -> 5 -> 2 -> 3

            // first  -> 2 3
            // second -> 4


            // tmp1 -> 3
            // tmp2 -> null

            // firs.next = second --> 2 --> 4

            // second.next = tmp1. --> 4 -- 3

            // 1 -> 5 --> 2 --> 4 --> 3;




        }

        // donhg the merge:








    }
}
