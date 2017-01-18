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

  let pointer1 = head;
  let pointer2;
  let prevPointer;

  while (pointer1) {
    pointer2 = pointer1.next;
    prevPointer = pointer1;

    while (pointer2) {

      if (pointer2.value === pointer1.value) {
        prevPointer.next = pointer2.next;
        // if (prevPointer.next) {
        //   pointer2 = pointer1.next;
        // } else {
        //   break;
        // }
        pointer2 = pointer2.next;
      } else {
        prevPointer = pointer2;
        pointer2 = pointer2.next;
      }
    }
    pointer1 = pointer1.next;
  }

  return head;
}

module.exports = deleteDups;
