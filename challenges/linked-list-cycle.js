/**
 * We are familar with linked lists being linear and terminating:
 *
 * A->B->C->D
 *
 * However, linked lists can also have cyclical references:
 *
 * A->B->C->D
 *    ^     |
 *    |     V
 *    G<-F<-E
 *
 * Create a function that accepts a linked list and returns true is the linked list has a cylical reference
 *
 * var node1 = new Node('1');
 * var node2 = node1.next = new Node('2');
 * var node3 = node2.next = new Node('3');
 * var node4 = node3.next = new Node('4');
 * var node5 = node4.next = new Node('5');
 * hasCycle(node1); // => false
 * node5.next = node2;
 * hasCycle(node1); // => true
 *
 * Challenge 1: Do this in linear time
 * Challenge 2: Do this in constant space
 * Challenge 3: Do not mutate the original nodes in any way
 *
 */

//^ #HELPME @brian -c 'What is a node? and why is it wanna cycle?
// integrating into existing project managment tools  --- create out own basic shared project managemnet
// with projects // TO DO LISTS // employee tags -- 


var Node = function(value) {
  this.value = value;
  this.next = null;
}

function hasCycle(head) {
  let curr = head;
  const nodes = [];
  for (curr; curr; curr = curr.next){
    nodes.push(curr);
    console
  }
  return nodes;
}

  // console.log(nodes.reduce((accum, el) => { if (el === curr) return true; }, false))

 var node1 = new Node('1');
 var node2 = node1.next = new Node('2');
 var node3 = node2.next = new Node('3');
 var node4 = node3.next = new Node('4');
 var node5 = node4.next = new Node('5');
//  console.log(hasCycle(node1)); // => false
 node5.next = node2;
console.log(hasCycle(node1)); // => true
 




module.exports = {Node: Node, hasCycle: hasCycle}
