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
  // create a store obj
  const store = {};
  store[head.value] = true;
  // have a reference to the head
  let current = head;
  // use while loop to go towards end
  while (current.next) {
    console.log('inspecting:', current.next.value);
    console.log('store:', store);
    // check if current reference's next value is in store
    if (current.next.value in store) {
      // if so, reassign current's next prop to the next next node
      current.next = current.next.next;
      return head;
    } else {
      // if not, reassign current node and add current's next value to store
      store[current.next.value] = true;
      current = current.next;
    }
  }
  return head;
}

module.exports = deleteDups;
