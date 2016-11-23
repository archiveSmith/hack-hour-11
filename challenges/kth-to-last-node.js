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
  this.counts = 0;
}

function kthToLastNode(k, head) {
  let currentNode = head;
  currentNode.counts = 1;
  let lastNode;
  if(head.next === null){
   return head;
  }else{
    while(currentNode.next !== null){
      let thisCount = currentNode.counts += 1;
      currentNode = currentNode.next;
      currentNode.counts = thisCount;
    }
  }
	 
  if(currentNode.next === null){
    currentNode.counts =  currentNode.counts + 1;
    lastNode = currentNode;
  }
  currentNode = head;
  while(currentNode !== lastNode){
     if(currentNode.counts === lastNode.counts - k+1){
        return currentNode.value;
     }else{
    currentNode = currentNode.next;
  }
  }
}



module.exports = {Node: Node, kthToLastNode: kthToLastNode};
//Contact GitHub API Training Shop Blog About
