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
  if(!head || head.value === undefined || head.value === null) return undefined;
  if(head.next === null) return head;
  let savedHead = head;
  let lastNext = savedHead.next;
  head.next = null;
  let arr=[{value: head.value, next: null}];

  while(lastNext.next !== undefined) {
    arr.unshift({value: lastNext.value, next:arr[0]});
    let temp = lastNext;
    lastNext = temp.next;
    if(!lastNext.next) {
      break;
    }
  }
  
  head.value = lastNext.value;
  head.next = arr[0];

  return head;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
