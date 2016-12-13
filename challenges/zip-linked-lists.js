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
  let current1 = l1;
  let count1 = 0;
  let current2 = l2;
  let count2 = 0;
  while (current1) {
    current1 = current1.next;
    count1 += 1;
  }
  while (current2) {
    current2 = current2.next;
    count2 += 1;
  }
  if (count1 === count2) {
    current1 = current2
  }
  if (count1 > count2) {

  }
  if (count1 < count2) {
    
  }
};

module.exports = {Node: Node, zip: zip};
