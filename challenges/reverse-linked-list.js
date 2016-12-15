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
  let prev = null;

  while (node) {
    const save = node.next;
    node.next = prev;
    prev = node;
    node = save;
  }
  return prev;
}

// we have a list of 4 things
// 1 2 3 4 where 1 is the head
// we want it to be 4 3 2 1 where 4 is the head
// now 1.next = 2 , 2.next = 3, 3.next = 4, 4.next = null
// save node of 3.next and go back to it after we move to 4 then reassign 3.
// let animal = 
// var list = new Node
//list.next


module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};




// let curr = head;
// let tempNode;
// while(current.next){
//   tempNode = current.next.next
