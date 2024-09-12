/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to top of the stack. Returns undefined. */

  push(val) {
    const newNode = new Node(val);

    if (!this.isEmpty()) { // if stack not empty, push new node to top of stack
      newNode.next = this.first; // set old top node as the next value following newNode
    }
    this.first = newNode;
    this.size++;
    return undefined;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }
    const valToRemove = this.first;
    this.first = this.first.next; // after removing node at top, the nexxt value becomes first
    this.size--;

    return valToRemove.val;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.first.val; // return value of first node
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Stack;
