/**
 * Write a function that takes an integer and the head of a singly linked list,
 * and returns the VALUE kth to last node in the list.

 */

 var a = new Node('A');
 var b = new Node('B');
 var c = new Node('C');
 var d = new Node('D');
 var e = new Node('E');
 var f = new Node('F');

 a.next = b;
 b.next = c;
 c.next = d;
 d.next = e;
 e.next = f;

//kthToLastNode(4,a);
//-> returns the node with the value 'D' (the second to last node)

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  let curr = head;
  let lastCounter = 1;
  while (curr.next) {
    lastCounter++
    console.log ("lastCounter:  ", lastCounter)
    curr = curr.next
  }
  let kth = lastCounter - k;
  console.log("kth val: ", kth)
  curr = head;
  while (kth > 0){
    curr = curr.next;
    kth--
  }
  return curr.value;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};