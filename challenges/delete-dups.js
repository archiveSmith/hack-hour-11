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
	check(head);
	return head;

	function check(someNode, searchVal = head, prevNode = head){
		if(someNode === null){
			searchVal = searchVal.next;
			if(searchVal === null) return;
			return check(head,searchVal,head);
		}
		else {
			if(someNode !== prevNode){
				if(someNode.value === hVal.value && someNode !== searchVal){
					prevNode.next = someNode.next;
					check(someNode.next, searchVal, prevNode);
				} else {
			    check(someNode.next, searchVal, prevNode.next);
				}
			} else {
			  check(someNode.next, searchVal, prevNode);
			}
		}
	}
}
module.exports = deleteDups;
