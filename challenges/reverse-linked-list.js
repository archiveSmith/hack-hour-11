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
<<<<<<< HEAD
  this.value = value;
  this.next = null;
}

function reverseLinkedList(head) {
  let node = head;
  if (!head) return null
  let result = new Node(head.value);

  while (node.next) {
    const temp = result;
    result = new Node(node.next.value);
    result.next = temp;
    node = node.next;
  }
  return result;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
=======
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {

}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
>>>>>>> 1a7485c2a025fa8d3cb0d86037701456406ed848
