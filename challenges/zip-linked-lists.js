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
<<<<<<< HEAD
  if (!l1) return l2;
  else if (!l2) return l1;
  else {
    let nodeL1 = l1;
    let nodeL2 = l2;
    let nodeL2save;
    while (nodeL1.next && nodeL2.next) {
      const l1next = nodeL1.next;
      nodeL1.next = l2;
      nodeL2save = l2.next;
      l2.next = l1next;
      nodeL1 = nodeL1.next;
      nodeL2 = nodeL2.next;
    }
  }
  return l1;
};


module.exports = {Node: Node, zip: zip};
=======
};

module.exports = {Node: Node, zip: zip};
>>>>>>> 1a7485c2a025fa8d3cb0d86037701456406ed848
