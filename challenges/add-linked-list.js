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

function getDigits(value) {
	value = value.toString();
	if (value.length > 1) {
		return {
			keep: parseInt(value[1], 10),
			carry: parseInt(value[0], 10)
		}
	} else {
		return {
			keep: parseInt(value[0], 10),
			carry: 0
		}
	}
}
	

function addLinkedList(l1, l2) {
	var value = getDigits(l1.value + l2.value);
	// console.log(value);
	var addll = new Node(value.keep);
	var head = addll;
	while (l1.next) {
		value = getDigits(l1.next.value + l2.next.value + value.carry);
		// console.log(value);
		addll.next = new Node(value.keep);
		l1 = l1.next;
		l2 = l2.next;
		addll = addll.next;
	}

	while (l2.next) {
		addll.next = new Node(l2.next.value + value.carry);
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
