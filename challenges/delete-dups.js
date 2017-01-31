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

let curr = head;
let cache = [];


while (curr !== null) {
    if (cache.includes(curr.val)) {
      if (curr.next.next === null) {
        curr.next = null;
      } else {
        curr.next = curr.next.next;
        curr = curr.next;
      }
    } else {
        cache.push(curr.val)
        curr = curr.next;
    }
    curr = curr.next''
}
return head
}




module.exports = deleteDups;
