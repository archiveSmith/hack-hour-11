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
  if (head === null) return false;
  if (head.next === null) return head;
  let tail = head;
  let i = head.next;
  while (i.next) {
    let prev = i;
    i = i.next;
    prev.next = tail;
    tail = prev;
  }
  i.next = tail;
  return i;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
