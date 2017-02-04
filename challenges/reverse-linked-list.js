/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 * 
get to the end of the LL, assign that to head
the make head.next equal to the next one..

make a counter to counter the LL..
then go down counter to add them...
 */
function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
	
    


}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
