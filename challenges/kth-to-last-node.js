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

  let length = 0;
  let currNode = head;

  while (currNode !== null) {
    length += 1;
    currNode = currNode.next;
  }

  if (length - k <= 0) {
    return undefined;
  }

  let currNode2 = head;

  const stop = length - k;

  let count = 0;

  let kthNode;

  while (currNode2 !== null && count <= stop) {
    if (count !== stop) {
      currNode2 = currNode2.next
      count += 1;
    } else {
      kthNode = currNode2;
      break;
    }
  }

  return kthNode.value;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
