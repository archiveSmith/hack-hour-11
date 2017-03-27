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

// function reverseLinkedList(head) {

//   if (!head || !head.next) {
//     return head;
//   }

//   let tail = head;
//   let prev;
//   let newHead = head.next;

//   while (newHead.next !== null) {
//     prev = newHead;
//     newHead = newHead.next;
//     prev.next = tail;
//     tail = prev;
//   }
//   newHead.next = tail;

//   return newHead;
// }

function reverseLinkedList(head) {

  // if (!head || !head.next) {
  //   return head;
  // }

  // const curr = head;

  // let temp1;
  // let temp2;

  // while (curr && curr.next) {

  //   temp1 = curr.next.next;
  //   temp2 = curr.next;

  //   //if (curr.next.next) {
  //     curr.next.next = curr;
  //   //}

  //   if (curr === head) {
  //     curr.next = null;
  //   }

  //   curr = temp2;
  // }

  if (!head || !head.next) {
    return head;
  }
  
  let reversed;
  let prev = null;
  let curr = head;
  
  while (curr) {
    reversed = curr;
    //console.log('rev ' + rev.val);
    curr = curr.next;
    //console.log('curr ' + curr.val);
    reversed.next = prev;
    prev = reversed;
  }
  
  return reversed;
}


module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
