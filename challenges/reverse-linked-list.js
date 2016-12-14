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
  if (!head) return undefined; // no head given, no reverse
  if (!head.next) return head; // one element, no need to reverse
  let curr = head;
  let newHead;
  while (curr){
    const temp = newHead;
    newHead = curr;
    curr =  curr.next
    newHead.next = temp; 
  }
  return newHead;
}


module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
