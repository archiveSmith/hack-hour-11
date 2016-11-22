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
  if (!head || k < 1){
    return undefined;
  }

  let current = head;
  let behind = head;

  // move current ahead to the kth index
  for (let i = 0; i < k - 1; i++){
    current = current.next;
    if(!current){
      return undefined;
    }
  }
  // the behind value will be our solution when current hits the end.
  while (typeof current.next !== 'undefined'){
    behind = behind.next;
    current = current.next;
  }
  return behind.value || undefined;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
