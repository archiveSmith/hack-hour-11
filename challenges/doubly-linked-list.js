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
LinkedList.prototype.add = function (val) {}
  if (this.head === null) {
    let curr = new Node(val)
    this.tail=curr;
    this.head=curr;
  } else {
    let curr = this.tail
   if(curr.next === null){
    curr.next = new Node(val);
    curr.next.prev = curr;
     curr = curr.next;
   }
  }


/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function (val) {
  let curr = this.head;
  if (curr.val === val) {
    curr = curr.next;
    this.head = curr;
    this.prev = null;
  } else {
    while (curr.next !== null) {
      if (curr.next.val === val) {
        curr.next = curr.next.next;
        cur.next.prev = curr;
      }
    }
  }
  
};

module.exports = LinkedList;
