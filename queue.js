const LinkedList = require('./LinkedList');

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this._list = new LinkedList(); // use LinkedList to manage nodes interally
    this.size = 0; // current # of nodes in th queue
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    this._list.push(val);
    this.size = this._list.size;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() { // using linkedlists shift()
    const val = this._list.shift(); // remove head value and return its val
    this.size = this._list.size;
    return val;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() { // use linkedlists peekfirst() to return first value
    return this._list.peekFirst();
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this._list.isEmpty();
  }
}

module.exports = Queue;
