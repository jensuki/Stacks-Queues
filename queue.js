/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val; // val is the value that the node holds
    this.next = null; // pointer to the next node to chain nodes together
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null; // first node reference
    this.last = null; // last node reference
    this.size = 0; // current # of nodes in th queue
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let newNode = new Node(val);

    if (this.isEmpty()) {
      // if queue is empty, new node = first and last
      this.first = newNode;
      this.last = newNode;
    } else {
      // if queue is not empty, add new node to end of queue
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return undefined;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty")
    }
    const nodeToRemove = this.first;
    this.first = this.first.next // move pointer to next node in queue in order to remove first node. next node is now the new 'front' of queue

    if (this.first === null) { // if queue only had one element and we remove it, both first and last elements are null
      this.last = null
    }
    this.size--; // since first node removed, # of elements in queue is - 1
    return nodeToRemove.val;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.first.val; // return value of first node
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}


module.exports = Queue;
