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
let count = -infinity;
let curr = head;
let head2 = null
while(curr !== null){
    if (curr.next === null) {
        head2 = new Node(curr)
    }
 count++;
 curr = curr.next;
}

curr = head;
let second = head2
for (let i=count; i>=0;i--) {
    let counter = i;
    while(curr !=null){
     if (curr === counter){
         while(second != null) {
            if (second.next === null){
            second.next = curr;
            }
     }
        count--
        second = second.next
    }
}


return head2
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
