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
  if (!this.head) {
    this.head = this.tail = node;
  }
  else {
    let cur = this.head;
    while (cur) {
      if (cur.next === null) {
        cur.next = this.tail = node;
        node.prev = cur;
        return;
      }
      cur = cur.next;
    }
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let cur = this.head;
  while (cur) {
    if (cur.val === val) {
      if (cur === this.head) {
        this.head = cur.next;
        this.head.prev = null;
        delete cur;
      } else if (cur === this.tail) {
        this.tail = cur.prev;
        this.tail.next = null;
        delete cur;
      } else {
        cur.prev.next = cur.next;
        cur.next.prev = cur.prev;
        delete cur;
      }
      return;
    }
    cur = cur.next;
  }
};

module.exports = LinkedList;

// const LL = new LinkedList();
// LL.add(1);
// LL.add(2);
// LL.add(3);
// LL.remove(2);
// console.log(LL);