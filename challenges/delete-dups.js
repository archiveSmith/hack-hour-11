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

cache.push(curr);

while (curr.next !== null) {
    if (cache.includes(curr.next)) {
      if (curr.next.next === null) {
        curr.next = null;
      } else {
        curr.next = curr.next.next;
        curr = curr.next;
      }
    } else {
        cache.push(curr.next)
        curr = curr.next;
    }
}
return head
}

let li = {value: 1, next: {value: 2, next: {value: 3, next: {value: 3, next: {value: 4, next: null}}}}}

console.log(deleteDups(li))

module.exports = deleteDups;
