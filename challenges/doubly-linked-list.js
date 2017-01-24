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
LinkedList.prototype.add = function add(val) {
  const newNode = new Node(val)
  if (!this.head) { this.head = this.tail = newNode; return; }
  newNode.prev = this.tail;
  this.tail.next = newNode;
  this.tail = newNode;
};


/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function remove(val) {
  let curr = this.head;
  while (curr) {
    if (curr.val === val) {
      curr.prev.next = curr.next;
      curr.next.prev = curr.prev;
      break;
    }
    curr = curr.next;
  }
};

const dbL = new LinkedList();

dbL.add(4)
dbL.add(3)
dbL.add(2)
dbL.add(1)
dbL.remove(3)
console.log(dbL);

module.exports = LinkedList;
