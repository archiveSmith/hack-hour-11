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
  let node = new Node(val)
  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let current = this.head;
  while (current) {
    if (current.val === val) {
      if (current === this.head) {
        this.head = current.next;
      } else if (current === this.tail){
        this.tail = current.prev;
      } else {
        current.prev.next = current.next;
        current.next.prev = current.prev;
      }
    }
    current = current.next;
  }
};


module.exports = LinkedList;
