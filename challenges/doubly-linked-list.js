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
  const node = new Node(val);

  if (!this.head === null) {
    this.head = this.tail = node;
  } else {
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }
};

/*
Removes the first node with the inputted value
 *///
LinkedList.prototype.remove = function(val) {
  let curr = this.head;

  while (curr) {
    if (val === curr.val) {
      if (curr === this.head && curr === this.tail) {
        this.head = this.tail = null;
      } else if (curr === this.head) {
        curr.next.prev = null;
        this.head = curr.next;
      } else if (curr === this.tail) {
        curr.prev.next = null;
        this.tail = curr.prev;
      } else {
        curr.prev.next = curr.next;
        curr.next.prev = curr.prev;
      }
      return;
    }
    curr = curr.next;
  }
  return "No values matched, so nothing removed.";
};

module.exports = LinkedList;
