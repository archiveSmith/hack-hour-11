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
<<<<<<< HEAD
  if (!this.head) {
    this.head = new Node(val);
    this.tail = this.head;
  } else {
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    node.next = new Node(val);
    node.next.prev = node;
    this.tail = node.next;
  }
=======
  
>>>>>>> 1a7485c2a025fa8d3cb0d86037701456406ed848
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
<<<<<<< HEAD
  if (this.head.val === val) {
    if (this.head.next) {
      console.log('hi');
      this.head = this.head.next;
      this.head.prev = null;
    } else this.head === null;
  } else {
    let node = this.head;
    while (node.next) {
      if (node.next.val === val) {
        if (node.next.next) {
          node.next = node.next.next;
          node.next.prev = node;
        } else {
          node.next = null;
          this.tail = node;
          return;
        }
      }
      node = node.next;
    }
  }
};

module.exports = LinkedList;
=======
  
};

module.exports = LinkedList;
>>>>>>> 1a7485c2a025fa8d3cb0d86037701456406ed848
