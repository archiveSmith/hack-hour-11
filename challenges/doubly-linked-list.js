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
// LinkedList.prototype.add = function(val) {
//   if (this.head === null) {
//     this.head = new Node(val);
//     this.tail = this.head
//   }

//   let curr = this.head;
//   while (curr.next !== null) {
//     if (curr.next === null) {
//       curr.next = new Node(val);
//       curr.next.prev = curr;
//       this.tail = curr.next;
//       break;
//     }
//     curr = curr.next;
//   }
// };

/*
Removes the first node with the inputted value
 */
// LinkedList.prototype.remove = function(val) {
//   let curr = this.head;

//   if (curr.val === val) {
//     curr.next = this.head;
//     curr.next.prev = null;
//   }

//   while (curr !== null) {
//     if (curr.val === val) {
//       if (curr = this.tail) {
//         this.tail = this.prev;
//         this.prev.next = null;
//       }
//       curr.next.prev = curr.prev
//       curr.prev.next = curr.next;
//     }
//     curr = curr.next;
//   }
// };

module.exports = LinkedList;
