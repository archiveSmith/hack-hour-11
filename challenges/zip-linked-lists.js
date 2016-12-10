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
	//just do a while loop and alternate passing in LL
	//pass the nodes into two arrays, and then iterate through the arrays??? nahh
	//can we inset it into one of the nodes?

	//can I insert them?? do a counter and then on every other one insert it. 

	curr = l2.next;



	while (curr !== null){
		let randomLi = li.next;

		li.next = Node(l2.val);

		li.next.next=randomLi;

		curr = curr.next;

	}

	return li;

};

module.exports = {Node: Node, zip: zip};
