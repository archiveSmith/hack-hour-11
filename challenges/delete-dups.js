/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */
	
function deleteDups(head) {	
if(!head) return undefined;
let hVal = head;
 			

while(hVal !== null){
	let checkVal = hVal.value;
	let previous = null;
	let curr = hVal;
	while(curr !== null){
		if(previous !== null && curr.value === checkVal){
		  
			previous.next = curr.next;
			curr.next = null;
			curr = previous.next;
	} else {
		previous = curr;
		curr = curr.next;
	}
	}



	hVal = hVal.next;
}
return head;


}
module.exports = deleteDups;
