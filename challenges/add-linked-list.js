<<<<<<< HEAD

/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (3 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 8 -> 0 -> 8
 *
 */


=======
>>>>>>> 1a7485c2a025fa8d3cb0d86037701456406ed848
/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (3 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 8 -> 0 -> 8
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

<<<<<<< HEAD
function findNum(node, sum) {
  if (!node.value) return 0;
  else {
    let constSum = node.value + sum;
    if (node.next) {
      return findNum(node.next, constSum);
    }
    return constSum
  }
}

function addNode(value) {
  if (!this.head) {
    this.head = new Node(value);
    this.tail = this.head;
  } else {
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    node.next = new Node(value);
    this.tail = node.next;
  }
};

function addNode(node, value) {
  if (!node.value) return new Node(value);
  else {
    if (!node.next) {
      node.next = new Node(value);
      return node;
    }
    else {
      return addNode(node.next);
    }
  }
}

function reverseFindNum(num) {
  num = num.toString();
  for (let i = num.length - 1; i >= 0; i -= 1) {
    
  }
}

function addLinkedList(l1, l2) {
  let node1 = ''
  let node2 = ''
  
  const firstSum = findNum(l1, node1);
  const secondSum = findNum(l2, node2);
  
  console.log('firstSum', firstSum);
  console.log('secondSum', secondSum);

  let addedNum = parseInt(firstSum) + parseInt(secondSum);
  addedNum = addedNum.toString();
  console.log(addedNum);
  return reverseFindNum(addedNum);
}

let l1 = new Node(1);
l1.next = new Node(2);
l1.next.next = new Node(3);

let l2 = new Node(6);
l2.next = new Node(7);
l2.next.next = new Node(8);

console.log('l1', l1);
console.log('l2', l2);

addLinkedList(l1, l2);
module.exports = {Node: Node, addLinkedList: addLinkedList};
=======
function addLinkedList(l1, l2) {

}

module.exports = {Node: Node, addLinkedList: addLinkedList};
>>>>>>> 1a7485c2a025fa8d3cb0d86037701456406ed848
