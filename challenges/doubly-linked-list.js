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
  // create new node
  const node = new Node(val);
  // if head is null assign head to node
  if (!this.head) this.head = node;
  else {
    this.tail.next = node;
    node.prev = this.tail;
  }
  // assign prev to current tail
  this.tail = node;
  // assign tail to node
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let curr = this.head;
  // starting from loop through the LL
  while (curr) {
    console.log('seraching');
    if (curr.val === val) {
      console.log('found match');
      if (!curr.prev) {
        this.head = curr.next;
        this.head.prev = null;
      } else if (!curr.next) {
        curr.prev = this.tail;
        this.tail.next = null;
      } else {
        curr.prev.next = curr.next;
        curr.next.prev = curr.prev;
      }
      return;
    } 
    curr = curr.next;
    // check if current node's value is equal to val
    // if so, save current node's prev  to tempPrev
    // and save current node's next  to tempNext
    // if not, set curr to next node
  }
};

const ll = new LinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
// ll.add(5);
// console.log(ll);
// console.log(ll.head);
ll.remove(2);
// console.log(ll.head);
console.log(ll);

module.exports = LinkedList;
