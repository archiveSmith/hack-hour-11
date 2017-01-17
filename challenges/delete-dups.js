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
  if (!head.next) return head;
  const temp = {};
  while (head.next) {
    if (!temp[head.value]) {
      temp[head.value] = 1;
      if (temp[head.next] && head.next.next) {
        head.next = head.next.next;
      } else if (temp[head.next]) {
        head.next = null;
      }
    }
    head = head.next;
  }
  return head;
}

module.exports = deleteDups;
