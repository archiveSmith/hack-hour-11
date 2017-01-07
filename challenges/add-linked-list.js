/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (3 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 8 -> 0 -> 8
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
	let inVal = l1.value + l2.value;
	let carry = 0;
	if(inVal > 9){
		carry = 1;
		inVal = Number(inVal.toString().slice(1));
	}
	let newHead = new Node(inVal);
	let newCurr = newHead;
	let curr1 = l1.next;
	let curr2 = l2.next;
	while(curr1 !== null || curr2 !== null){
		if(curr1 === null) inVal = curr2.value + carry;
		else if(curr2 === null) inVal = curr1.value + carry;
		else inVal = curr1.value + curr2.value + carry;
		carry = 0;
		if(inVal > 9){
			carry = 1;
			inVal = Number(inVal.toString().slice(1));
		}
		newCurr.next = new Node(inVal);

		newCurr = newCurr.next;
		if(curr1) curr1 = curr1.next;
		if(curr2) curr2 = curr2.next;
	}
	
	
	if(carry === 1){
	  newCurr.next = new Node(1);
	}

	return newHead;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
