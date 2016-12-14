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
  let node = head;
  let result = new Node(head.value);
  console.log(result)
  while (node.next) {
    const temp = result;
    result = new Node(node.next.value);
    result.next = temp;
    node = node.next;
  }
  return result;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};