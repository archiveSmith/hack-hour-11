/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  let head;
  let tail;// = head;

  if (l1) {
    head = l1;
    //tail = l2;
    tail = head;
    l1 = l1.next;
  } else {
    head = l2;
    tail = head;
    l2 = l2.next;
  }
  //let tail = head;

  while (l1 !== null || l2 !== null) {//tail !== null) {
    if (l2) {
      tail.next = l2;
      l2 = l2.next;
      //tail.next = l2;
      //l2 = l2.next;
      tail = tail.next;
    }

    if (l1) {
      tail.next = l1;
      l1 = l1.next;
      tail = tail.next;
    }
  }

  return head;
};

module.exports = {Node: Node, zip: zip};
