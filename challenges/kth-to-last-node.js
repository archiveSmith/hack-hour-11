/**
 * Write a function that takes an integer and the head of a singly linked list,
 * and returns the VALUE kth to last node in the list.
 *
 * var a = new Node('A');
 * var b = new Node('B');
 * var c = new Node('C');
 * var d = new Node('D');
 * var e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2,a); -> returns the node with the value 'D' (the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  //establish counter variable
  let lengthCounter = 1;
  //establish a node as the head
  let currentNode = head;
  let i = 0;
  while(currentNode.next !== null) {
    currentNode = currentNode.next
    lengthCounter++;
  }

  let nodeCounter = 1;
  let nodeFinder = head;
  while(nodeCounter !== lengthCounter - (k - 1)) {
    nodeFinder = nodeFinder.next;
    nodeCounter++;
  }
  return nodeFinder.value;
  //traverse linkedList
  //if counter === counter - (k-1) return current Node
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
