const LinkedList = require('./LinkedList');

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this._list = new LinkedList();
    this.size = 0;
  }

  /** push(val): add new value to top of the stack. Returns undefined. */

  push(val) {
    this._list.push(val);
    this.size = this._list.size;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    const val = this._list.pop(); // pop value from end of the list(top of the stack)
    this.size = this._list.size;
    return val;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this._list.peekLast(); // peek at last element in list (top of the stack)
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this._list.size === 0;
  }
}

module.exports = Stack;
