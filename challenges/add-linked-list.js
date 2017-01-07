'use strict';
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
  let sl1 = '', sl2 = '';

  while(l1 || l2){
    if(l1){
      sl1 += l1.value.toString();
      l1 = l1.next;
    }

    if(l2){
      sl2 += l2.value.toString();
      l2 = l2.next;
    }
  }

  return parseInt(sl1.split('').reverse().join('')) + parseInt(sl2.split('').reverse().join(''));

}

module.exports = {Node: Node, addLinkedList: addLinkedList};
