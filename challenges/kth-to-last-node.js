/**
 * Write a function that takes an integer and the head of a singly linked list,
 * and returns the VALUE kth to last node in the list.
 *
 * var a = new Node('A');
 * var b = new Node('B');
 * var c = new Node('C');
 * var d = new Node('D');
 * var e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2,a); -> returns the node with the value 'D' (the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
	if (head === undefined || k === undefined) return 'Error: k index and head node must be provided';

	const nodeValueStorage = {};
	let current = head;
	let count = 1;
	let indexOfTarget;
	while (current.next !== null) {
		nodeValueStorage[count - 1] = current;
		current = current.next;
		count += 1;
	}

	if (k > count || k < 1) return 'Error: k index is out of bounds';

	nodeValueStorage[count - 1] = current;
	indexOfTarget = count - k;
	return nodeValueStorage[indexOfTarget];
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
