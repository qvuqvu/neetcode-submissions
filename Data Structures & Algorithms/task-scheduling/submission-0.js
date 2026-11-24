class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {

        // intuition --> handle the most frequent task 
        // look at this, no can do for this case: CBCBA_A_A 3As while the n =1
        // ABCABCA
        // max heap (counts of tasks) --> pop the most frequent 
        // increase time by 1
        // write it into queue -> (popped task +1 (for negative), time + n)


        // apply 26 uppercase char A - Z
        // let count = new Array(26).fill(0);


        // for(let task  of tasks) {
        //     count[task.charCodeAt(0) - 'A'.charCodeAt(0)]++
        // }


        // use simpler: map 
        let count = new Array(26).fill(0);
        for (let task of tasks) {
            count[task.charCodeAt(0) - 'A'.charCodeAt(0)]++;
        }

        let maxHeap = new MaxPriorityQueue();
        for (let i = 0; i < 26; i++) {
            if (count[i] > 0) maxHeap.push(count[i]);
        }
        let time = 0;

        let q = new Queue();

        while (maxHeap.size() > 0 || q.size() > 0) {
            time++;
            if (maxHeap.size() > 0) {
                let cnt = maxHeap.pop() - 1;
                if (cnt !== 0) {
                    q.push([cnt, time + n]);
                }
            }
            if (q.size() > 0 && q.front()[1] === time) {
                maxHeap.push(q.pop()[0]);
            }
        }

         return time;

    }
}
