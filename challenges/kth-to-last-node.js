/**
 * Write a function that takes an integer and the head of a singly linked list,
 * and returns the VALUE kth to last node in the list.
 *
var a = new Node('A');
var b = new Node('B');
var c = new Node('C');
var d = new Node('D');
var e = new Node('E');
*
a.next = b;
b.next = c;
c.next = d;
d.next = e;
 *
 * kthToLastNode(2,a); -> returns the node with the value 'D' (the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  let count = 1;
  let secondCount = 1;
  let node = head;
  // console.log('before:', node);
  while (node.next) {
    node = node.next;
    count ++;
  }
  // console.log('after:', node);
  // console.log(count);
  while (secondCount <= count - k) {
    head = head.next;
    secondCount ++;
  }
  // console.log('result:', head.value);
  return head.value;
}

kthToLastNode(2,a)
module.exports = {Node: Node, kthToLastNode: kthToLastNode};
