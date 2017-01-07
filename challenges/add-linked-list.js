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
  let sumNode = new Node(l1.value + l2.value);
  let currNode = sumNode;
  console.log('initial sumNode:', sumNode);
  let curr1 = l1;
  let curr2 = l2;
  let carrier = 0;
  while (curr1.next || curr2.next) {
    if (!curr1.next) {
      currNode.next = new Node(curr2.next.value + carrier);
    } else if (!curr2.next) {
      currNode.next = new Node(curr1.next.value + carrier);
    } else {
      if (curr1.next.value + curr2.next.value > 9) {
        const digit = curr1.next.value + curr2.next.value - 10;
        currNode.next = new Node(digit + carrier);
        carrier = 1;
      } else {
        currNode.next = new Node(curr1.next.value + curr2.next.value + carrier);
        carrier = 0;
      }
      console.log('sumNode:', sumNode);
    }
    curr1 = curr1.next;
    curr2 = curr2.next;
    currNode = currNode.next;
  }
  return sumNode;
}

let ll1 = {
  value : 3,
  next : {
    value : 1,
    next: {
      value: 5,
      next: null
    }
  }
};

let ll2 = {
  value : 5,
  next : {
    value : 9,
    next: {
      value: 2,
      next: null
    }
  }
};

module.exports = {Node: Node, addLinkedList: addLinkedList};
