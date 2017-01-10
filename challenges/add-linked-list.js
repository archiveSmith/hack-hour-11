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

function addLinkedList(l1, l2) {
  
  function combineAndAdd(l1, l2, tens = 0) {
    if (!l1 && !l2 && tens === 0) {
      return undefined;
    }

    let newNode = new Node();
    let a = 0, b = 0, sum;

    if (l1 && l1.value) {
      a = l1.value;
    } 

    if (l2 && l2.value) {
      b = l2.value;
    }

    sum = a + b + tens;

    let tensVal = Math.floor(sum / 10);
    let onesVal = sum % 10;

    newNode.value = onesVal;

    newNode.next = combineAndAdd(l1, l2, tensVal);

    return newNode;
  }

  return combineAndAdd(l1, l2);
}

module.exports = {Node: Node, addLinkedList: addLinkedList};

// const node1 = new Node(3);
// const node2 = new Node(1);
// const node3 = new Node(5);
// node1.next = node2;
// node2.next = node3

// const node4 = new Node(5);
// const node5 = new Node(9);
// const node6 = new Node(2);
// node4.next = node5;
// node5.next = node6;

// console.log(addLinkedList(node1, node2));