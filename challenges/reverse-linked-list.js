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

  if (!head || !head.next) {
    return head;
  }

  let tail = head;
  let prev;
  let newHead = head.next;

  while (newHead.next !== null) {
    prev = newHead;
    newHead = newHead.next;
    prev.next = tail;
    tail = prev;
  }
  newHead.next = tail;

  return newHead;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
