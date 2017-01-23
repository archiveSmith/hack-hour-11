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



ffunction deleteDups(head) {
	if(head === null) return 'LinkedList is empty'
  let curr = head;
  let prev = null;
  let temp = null; 
  let ans = false;
  while(curr.next !== null){
  	temp = head;
  	while(temp !== curr){
  		if(curr.value != temp.value){
  			temp= temp.next;
  			ans = false;
  		}else{
  			prev.next = curr.next;
  			curr=prev.next;
  			flag = true;
  			return flag;
  		}
  }
  if(ans === false){
  	prev = curr;
  	curr = curr.next
  }
}
return ans;
}


module.exports = deleteDups;
