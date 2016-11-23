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
	/*
  let toTheEnd = 0;
  
  function inner(k, head) {
    console.log(toTheEnd, k);
    if (head.next === null) {
      //console.log("At the end");
      toTheEnd = 1;
      return toTheEnd;
    } else if (toTheEnd && toTheEnd < k) {
      //console.log("Retreating");
      return toTheEnd++;
    } else {
      //console.log("Dig deeper");
      toTheEnd = inner(k, head.next);
      return toTheEnd++;
    }
  }
  
  if (toTheEnd === k) {
    return head;
  }
  
  toTheEnd = inner(k, head);
  */

  for (let i = head; i; i = head.next) {

  }
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
