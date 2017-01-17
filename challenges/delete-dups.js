/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3

 go through and put every value into an array. check if val is in array,
 if iti is remove that node. 
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */

function Node(val){
	this.value = val;
	this.next = null;
}


function deleteDups(head) {
	const dups = [];
	const current = head;
	dups.push(current.value)

	while (current !== null){

		if (dups.includes(current.next.value)){
			current.next = current.next.next
		}
		else dups.push(current.next.value);
		current = current.next;
	}

		return head;
}


module.exports = deleteDups;
