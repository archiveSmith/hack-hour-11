/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
	let temp = l1.next;


	while (l1.next !== null && l2.next !== null) {
	 
		l1.next = new Node(l2.value);
		
		l1.next.next = temp;
		temp = temp.next;
		l2 = l2.next;

	}
	
	return l1;

};
//module.exports = {Node: Node, zip: zip};
