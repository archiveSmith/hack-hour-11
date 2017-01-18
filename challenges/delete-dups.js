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
// if(!head) return undefined;
// let hVal = head;
 			

// // while(hVal !== null){
// // 	let checkVal = hVal.value;
// // 	let previous = null;
// // 	let curr = hVal;
// // 	while(curr !== null){
// // 		if(previous !== null && curr.value === checkVal){
		  
// // 			previous.next = curr.next;
// // 			curr.next = null;
// // 			curr = previous.next;
// // 	} else {
// // 		previous = curr;
// // 		curr = curr.next;
// // 	}
// // 	}


// // 	hVal = hVal.next;
// // }
// // return head;



if(!head) return undefined;
let hVal = head; 			
check(head, head, hVal);
return head;






function check(someNode, prevNode, hVal){
	if(someNode === null){
		hVal = hVal.next;
		if(hVal === null) return;
		return check(head,head,hVal);
	}
	else {
		if(someNode !== prevNode){
			if(someNode.value === hVal.value && someNode !== hVal){
				prevNode.next = someNode.next;
				check(someNode.next, prevNode, hVal);
			} else {
		    check(someNode.next, prevNode.next, hVal);
			}
		} else {
		  check(someNode.next, prevNode, hVal);
		}
	}
}
}
module.exports = deleteDups;
