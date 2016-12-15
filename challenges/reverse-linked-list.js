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
	let save;
	let prev;
	while (node) {
		save = node.next;
		node.next = prev; // undefined for now
		prev = node;
		node = save;
	}
	head = prev;
	return head;
}

const myHead = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: null
		}
	}
}

console.log(reverseLinkedList(myHead));

module.exports = { Node: Node, reverseLinkedList: reverseLinkedList };
