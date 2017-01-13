/**
 * We are familar with linked lists being linear and terminating:
 *
 * A->B->C->D
 *
 * However, linked lists can also have cyclical references:
 *
 * A->B->C->D
 *    ^     |
 *    |     V
 *    G<-F<-E
 *
 * Create a function that accepts a linked list and returns true is the linked list has a cylical reference
 *
 * var node1 = new Node('1');
 * var node2 = node1.next = new Node('2');
 * var node3 = node2.next = new Node('3');
 * var node4 = node3.next = new Node('4');
 * var node5 = node4.next = new Node('5');
 * hasCycle(node1); // => false
 * node5.next = node2;
 * hasCycle(node1); // => true
 *
 * Challenge 1: Do this in linear time
 * Challenge 2: Do this in constant space
 * Challenge 3: Do not mutate the original nodes in any way
 *
 */

var Node = function(value) {
  this.value = value;
  this.next = null;
}

function hasCycle(head) {
  // let turtle = head;
  // let hare = head;
  // while (true) {
  //   turtle = turtle.next;
  //   if (hare.next !== null) {
  //     hare = hare.next.next;
  //   } else {
  //     return false;
  //   }
  //   if (turtle === null  || hare === null) {
  //     return false;
  //   }
  //   if (turtle.value === hare.value) {
  //     return true;
  //   }
  // }

  // // O(n^2) time and O(n) space
  // if (!head || !head.next) return false;
  // const seen = [];
  // while (head) {
  //   if (seen.includes(head)) return true;
  //   seen.push(head);
  //   head = head.next;
  // }
  // return false;

  // O(n) time and O(1) space
  if (!head) return false;

  let slow = head;
  let fast = head.next;

  while(fast && fast.next) {
    if (slow === fast) return true;
    slow = slow.next;
    fast = fast.next.next;
  }

  return false;
}

module.exports = {Node: Node, hasCycle: hasCycle}
