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

let Node = function (value) {
  this.value = value,
  this.next = null
}
let head = new Node(1)
head.next = new Node(2);
head.next.next = new Node(2);
head.next.next.next = new Node(3);




function deleteDups(head) {
  console.log(head)
  let curr = head;
  const values = [];
  while(curr) {
    values.push(curr.value);
    if (curr.next && values.indexOf(curr.next.value) > -1) curr.next = curr.next.next;
    curr = curr.next;
  }
}

deleteDups(head)
console.log(head);
module.exports = deleteDups;
