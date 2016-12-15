"use strict";
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


let la = new Node(0);
let lb = new Node(10);
let aNode, bNode;
let aCurr = la;
let bCurr = lb;

for(let i= 0; i < 5; i++){
  aNode = new Node(i+1);
  bNode = new Node(i+ 11);

  aCurr.next = aNode;
  bCurr.next = bNode;

  aCurr = aCurr.next;
  bCurr = bCurr.next;
}

function zip(l1, l2) {
  let first = l1;
  let curr = l1;
  l1 = l1.next;
  //console.log("curr: ", curr);

  while( curr.next){
    curr.next = l2;
    l2 = l2.next;
    curr = curr.next;
    //console.log("curr: ", curr);

    if(l1.next === null) break;

    curr.next = l1;
    l1 = l1.next;
    curr = curr.next;
    //console.log("curr: ", curr);
  }

  return first;
};

function displayNodes(curr){
  while(curr.next !== null){
    console.log("Showing that Node :) ---> ", curr);
    curr = curr.next;
  }
  console.log("Showing that Node :) ---> ", curr);
}



displayNodes(zip(la,lb));
//module.exports = {Node: Node, zip: zip};
