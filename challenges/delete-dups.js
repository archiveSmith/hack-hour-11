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

function Node(value) {
  this.value = value;
  this.next = null;
}

function deleteDups(head) {
  if (!head) return undefined;
  const vals = {};
  let prev;
  let cur = head;

  while (cur) {
    if (vals[cur.value]) {
      prev.next = cur.next;
      cur = cur.next;
    } else {
      vals[cur.value] = 1;
      prev = cur;
      cur = cur.next;
    }
  }

  return head;
}

module.exports = deleteDups;
