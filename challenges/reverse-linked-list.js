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
	if(head.next === null) return head;
	if(head.value === null) return undefined;
	let oldHead = head;
	let curr = head;
	let newHead = new Node(head.value);
	let otherCurr = newHead;
	while(head.next !== null){
  	while(curr.next.next !== null){
  		curr = curr.next;
  	}
	otherCurr.next = curr.next;
	otherCurr.next.next = curr;
	curr.next = null;
	curr = oldHead;
	otherCurr= otherCurr.next;
	}
	return newHead.next;
	
}



module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
