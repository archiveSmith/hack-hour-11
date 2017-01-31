/**
 * Write a function that takes an integer and the head of a singly linked list,
 * and returns the VALUE kth to last node in the list.
 *
 * var a = new Node('A');
 * var b = new Node('B');
 * var c = new Node('C');
 * var d = new Node('D');
 * var e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2,a); -> returns the node with the value 'D' (the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
<<<<<<< HEAD
  let listLength = 0;
  let focusPosition = 0;
  let countPosition = 0;
  let curr = head;
  while (curr !== null) {
    listLength++;
    curr = curr.next;
}

focusPosition = listLength - k;
curr = head;

  while (curr !== null) {
    if (countPosition === focusPosition) {
      return curr;
    }
    countPosition++;
    curr = curr.next
  }

return undefined;
=======

>>>>>>> 680f6209a189dae9f94a37a181b3fd72eafd0997
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
