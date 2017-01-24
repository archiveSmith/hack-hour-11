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
  let arr = [];
  let counter = 0;
  while(head !== null) {
    counter++;
    arr.push(head.value)
    head = head.next;
  }
  for(let i = 0; i < )

}

module.exports = deleteDups;
