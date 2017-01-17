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
  const nodes = {};
  let prev;
  let curr = head;

  while (curr) {
    if (nodes[cur.value]) {
      prev.next = curr.next;
      curr = curr.next;
    } else {
      nodes[curr.value] = 1;
      prev = curr;
      curr = curr.next
    }
  }
  return head;
}

module.exports = deleteDups;
