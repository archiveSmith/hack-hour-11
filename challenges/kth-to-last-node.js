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
'use strict';
function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {

  
  let savedElement = head;
  let curr = head;
  let numTimes = k-1;
  let ranBefore = false;

  while (curr !== null && curr !== undefined) {
    if (!ranBefore) {
      for (let i=0; i<=numTimes; i++) {
        //console.log('curr: ' + curr.value);
        curr = curr.next;
        //console.log(curr.value);
        ranBefore = true;
        if (i< numTimes && (curr === null || curr === undefined)) {
          return undefined;
        }
      }
      savedElement = savedElement.next;
    }

    //console.log('curr got out with a value of ' + curr.value);
    
      if (curr.next !== null && curr.next !== undefined) {
        curr = curr.next;
        savedElement = savedElement.next; 
        //console.log('curr after: ' + curr.value);
        //console.log('savedElement after: ' + savedElement.value);
      } else {
        return savedElement.value;
      }
      
  }

}


var a = new Node('A');
  var b = new Node('B');
  var c = new Node('C');
  var d = new Node('D');
  var e = new Node('E');
 
  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
 
  console.log(kthToLastNode(2,a));




module.exports = {Node: Node, kthToLastNode: kthToLastNode};
