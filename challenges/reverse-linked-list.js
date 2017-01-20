/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
  let cont = true;
  let current = head;
  let tempNode;
  while (cont) {
    tempNode = current.next.next;
    current.next.next = current;
    current = current.next;
    if (tempNode) cont = false;
  }
  return current;
}

const n1 = new Node(1);
n1.next = new Node(2);

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
