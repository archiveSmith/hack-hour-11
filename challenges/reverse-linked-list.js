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
  const vals = [];
  let current = head;
  while (current) {
    vals.push(current.value);
    current = current.next;
  }

  const len = vals.length;
  current = head;
  for (let i = len - 1; i >= 0; i -= 1) {
    current.value = vals[i];
    current = current.next;
  }

  return head;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
