class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cap = capacity;
        this.cache = new Map(); // using the hashmap to save the key value -> constant time lookup/get
        this.left = new Node(0, 0) // left --> least recent 
        this.right = new Node(0, 0) // right --> most recent 
        this.left.next = this.right;
        this.right.prev = this.left;
    }


    /**
  
    * @param {number} value
    * @return {void}
    */
    insert(node) {
        const prev = this.right.prev;
        prev.next = node;
        node.prev = prev;
        node.next = this.right;
        this.right.prev = node;
    }

    /**
    * @param {number} key
    * @param {number} value
    * @return {void}
    */
    remove(node) {
        let prev = node.prev;
        let nxt = node.next;

        prev.next = nxt;
        nxt.prev = prev;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (this.cache.has(key)) {
            this.remove(this.cache.get(key))
            this.insert(this.cache.get(key))
            return this.cache.get(key).val; // node
        } else {
            return -1;
        }
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.cache.get(key)) {
            this.remove(this.cache.get(key));
        }
        const newNode = new Node(key, value);
        this.cache.set(key, newNode);
        this.insert(newNode);

        if (this.cache.size > this.cap) {

            let lru = this.left.next;
            this.remove(lru);
            this.cache.delete(lru.key)
        }



    }
}
