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

class LinkedList {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
  
  add(val) {
    for (let i = this; i; i = i.next) {
      if (!i.next) {
        i.next = new LinkedList(val);
      }
    }
  }
}

function deleteDups(head) {
  const buffer = [];
  for (let i = head; i; i = i.next) {
    buffer.push(i.value);
  }

  const noDupes = buffer.filter((x, i, a) => {
    return !a.slice(0, i).includes(x);
  });

  let result = new LinkedList(noDupes[0]);

  noDupes.forEach((val) => {
    console.log(result);
  });

  return result;
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
