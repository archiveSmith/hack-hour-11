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
<<<<<<< HEAD
  this.counter = 0;
}
function kthToLastNode(k, head) {
  let current = head;
  current.counter = 1;
  let lastNode;
  if(head.next === 'null'){
   return head;
  } else {
    while(current.next !== 'null') {
      let myCount = current.counter += 1;
      current = current.next;
      current.counter = myCount;
    }
  }
     
  
  
  if(current.next === 'null') {
    current.counter =  current.counter + 1;
    lastNode = current;
  }
  current = head;
  while(current !== lastNode) {
     if(current.counter === lastNode.counter - k + 1){
        return current.value;
     } else {
    current = current.next;
  }
    return undefined; 
  }
 
}

=======
}

function kthToLastNode(k, head) {

}
>>>>>>> 680f6209a189dae9f94a37a181b3fd72eafd0997

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
