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
	var addll = new Node(l1.value + l2.value);
	var head = addll;
	while (l1.next) {
		addll.next = new Node(l1.next.value + l2.next.value);
		l1 = l1.next;
		l2 = l2.next;
		addll = addll.next;
	}

	return head;
}

// var l1 = new Node(1);
// l1.next = new Node(2);
// l1.next.next = new Node(3);
// l1.next.next.next = new Node(4);

// var l2 = new Node(1);
// l2.next = new Node(2);
// l2.next.next = new Node(3);
// l2.next.next.next = new Node(4);

// console.log(addLinkedList(l1, l2));

module.exports = {Node: Node, addLinkedList: addLinkedList};
