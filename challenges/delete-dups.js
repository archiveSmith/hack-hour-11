
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
  let node = head;
  let store = [];
  while (node) {
    store.push(node.value);
    if (node.next) {
      if (store.includes(node.next.value)) {
        if (node.next.next) node.next = node.next.next;
        else node.next = null;
      }
    }
    node = node.next;
  }
}


module.exports = deleteDups;