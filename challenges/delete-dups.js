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
  const buffer = [];
  for (let i = head; i; i = i.next) {
    for (let j = head; j; j = j.next) {
      if (i.value === j.value)
    }
  }
  return buffer;
}

const linkedlist = {
  value: 5,
  next: {
    value: 3,
    next: {
      value: 7,
      next: {
        value: 4,
        next: {
          value: 7,
          next: {
            value: 1,
            next: null
          }
        }
      }
    }
  }
}

console.log(deleteDups(linkedlist));

module.exports = deleteDups;
