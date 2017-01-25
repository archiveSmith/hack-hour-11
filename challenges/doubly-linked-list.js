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
LinkedList.prototype.add = function (val) {
  const nn = new Node(val);
  if (this.head === null) {
    this.head = nn;
    this.tail = this.head;
  } else if (this.tail.next === null) {
    this.tail.next = nn;
    nn.prev = this.tail;
    this.tail = nn;
  }
  return nn;
};
/*
Removes the first node with the inputted value
 */

LinkedList.prototype.remove = function (val) {
  let curr = this.head;

  while (curr.next) {
    if (curr.next.val === val) {
      curr.next = curr.next.next;
      curr.next.prev = curr;
    } else {
      curr = curr.next;
    }
  }
  return curr;
};


module.exports = LinkedList;





// var ll = new LinkedList();

// ll.add(3)
// ll.add(4)
// ll.add(5)
// ll.remove(4)
// console.log(ll);
