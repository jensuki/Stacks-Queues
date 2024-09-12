// node class - represents each individual elemen in the linked list

class Node {
    constructor(val) {
        this.val = val; // store current value of node
        this.next = null; // points to nexxt node - null if no next node
    }
}

// linkedlist class : manages a collection of nodes, where each node links to the next node
class LinkedList {
    constructor() {
        this.head = null; // points to first node, null if empty
        this.tail = null; //points to last node, null if empty
        this.size = 0; // tracks # of nodes in the list
    }


    /**
    * push(val): Add a new node with value 'val' to the end of the list.
    * This method adds a new node at the tail (end) of the list.
    */

    push(val) {
        const newNode = new Node(val);

        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.size++;
    }

    /**
    * shift(): Remove and return the value of the first node in the list.
    * This method removes the node at the head (start) of the list.
    */

    shift() {
        if (this.isEmpty()) {
            throw new Error('List is empty');
        }
        const nodeToRemove = this.head;
        this.head = this.head.next; // update new head  as the next node in list

        // if list is empty after removing first item, set tail to null
        if (this.size === 0) {
            this.tail = null;
        }
        this.size--;
        return nodeToRemove.val;
    }

    /**
    * pop(): Remove and return the value of the last node in the list.
    * This method removes the node at the tail (end) of the list.
    */
    pop() {
        if (this.isEmpty()) {
            throw new Error('List is empty');
        }
        // if only one node, just remove it -> then reset head and tail to null
        if (this.size === 1) {
            const nodeToRemove = this.head;
            this.head = null;
            this.tail = null;
            this.size--;
            return nodeToRemove.val;
        } else { // if more items are in the list
            let current = this.head;
            let newTail = current;

            // traverse until last node and newTail is second to last
            while (current.next) {
                newTail = current;
                current = current.next;
            }

            // set new tail as second to last node
            this.tail = newTail;
            this.tail.next = null; // disconnect old last node
        }
        this.size--;
        return current.val;
    }

    /**
     * peekFirst(): Return the value of the first node in the list without removing it.
     * This method is used to view the first node in the list.
     */

    peekFirst() {
        if (this.size === 0) {
            throw new Error('List is empty');
        }
        return this.head.val;
    }

    /**
   * peekLast(): Return the value of the last node in the list without removing it.
   * This method is used to view the last node in the list.
   */

    peekLast() {
        if (this.size === 0) {
            throw new Error('List is empty');
        }
        return this.tail.val;
    }

    /**
   * isEmpty(): Return true if the list is empty, otherwise false.
   * This method checks whether the list contains any nodes.
   */

    isEmpty() {
        return this.size === 0;
    }
}

module.exports = LinkedList;