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
 // function linkedList(){
 // 	this.head = null;
 // 	this.tail = null;
 // }



function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
	let i = 1;
	let curNode = head;
while (curNode.next !== null) {
	curNode = curNode.next;
	i++;
}
if (k > i){
	return undefined;
}

let j =0
curNode = head;
while(j < (i-k)){
curNode = curNode.next;
j++;	
}

return curNode.value;

}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
