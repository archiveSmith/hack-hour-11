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

var a = new Node('A');
  var b = new Node('B');
  var c = new Node('C');
  var d = new Node('D');
  var e = new Node('E');

  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;


function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  let nodes = [];
   let nodes = [];
  for(let i = head; i;  i = i.next) {
    nodes.push(head.i.value);
  }
  return nodes[nodes.length - k];
  // let count = 2;

  // if(head.next !== null) {
  //   count++;
  // }


  // for(let i = 0; i < count; i++) {
  //   nodes.push(head);
  //   head = head.next;
  // }

  // return nodes;//[nodes.length - k].value;
	}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
