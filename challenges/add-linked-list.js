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
  let arr1 = [];
  let arr2 = [];
  let i = l1;
  let j = l2;
  while (i.next) {
    arr1.push(i.value);
    i = i.next;
  }
  while (j.next) {
    arr2.push(j.value);
    j = j.next;
  }
  arr1.reverse().join('')
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
