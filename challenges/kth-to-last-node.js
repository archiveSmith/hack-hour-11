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
  let count = 0;
  let current1 = head.next;
  while (current1) {
    current1 = current1.next;
    count++;
  }
  let current2 = head.next;
  let limit = count - k;
  if (limit < 0) return head.value;
  for (let i = 0; i < limit; i++) {
    current2 = current2.next;
  }
  return current2.value;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
