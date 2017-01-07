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
  if(!l1 || !l2) {
     return undefined;
   }

  let value = 0;
  let last, list;

  while(l1 || l2) {
    if(l1 || l2) {
      value += l1.value;
      l1 = l1.next;
    }

    if(l2) {
      value += l2.value;
      l2 = l2.next;
    }
    if(last) {
      last.next = new Node(value % 10);
      last = last.next;
    }
    else {
      list = new Node(value % 10);
      last = list;
    }
    value = value / 10 | 0;
  }
  if(value) {
    last.next = new Node(value);
  }
  return list;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
