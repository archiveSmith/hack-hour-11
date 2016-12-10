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
  if (!l1 && !l2) {
    return -1;
  }
  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }
  top = l1;
  bottom = l2;
  while(top !== null && bottom !== null) {
    // console.log('top is ' + top.value);
    // console.log('bottom is ' + bottom.value);
    let tempTop = top.next;
    let tempBottom = bottom.next;
    top.next = bottom;
    bottom.next = tempTop;
    bottom = tempBottom;
    top = tempTop;
  }
  return l1;
};


// node1 = new Node(2);
// node2 = new Node (3);
// node3 = new Node (1);
// node4 = new Node (9);
// node1.next = node2;
// node2.next = node3;
// node3.next = node4;

// xnode1 = new Node(5);
// xnode2 = new Node (7);
// xnode3 = new Node (2);
// xnode4 = new Node (10);
// xnode1.next = xnode2;
// xnode2.next = xnode3;
// xnode3.next = xnode4;


// console.log(zip(node1, xnode1));




module.exports = {Node: Node, zip: zip};
