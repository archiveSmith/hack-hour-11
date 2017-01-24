/*
Create a doubly linked list with an add and remove method
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/*
Adds a node to the end of the list
 */
LinkedList.prototype.add = function(val) {
  let node = new Node(val);
  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    let temp = this.tail;
    node = this.tail;
    this.tail.prev = temp;
  }
  return true;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  if (this.head.val === val) {
    this.head.next = this.head;
    this.head.prev = null;
  } else if (this.tail.val === val) {
    this.tail.prev = this.tail;
    this.tail.next = null;
  } else {
    for (let i = this.head.next; i; i = i.next) {
      if (i.val === val) {
        i.prev.next = i.next;
        i.next.prev = i.prev;
      }
    }
  }
  return;
};

module.exports = LinkedList;
