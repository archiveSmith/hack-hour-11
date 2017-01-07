/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (3 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 8 -> 0 -> 8
 *
 */

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
  // console.log(l1.next.next.value);
  let strl1 = l1.value.toString() + l1.next.value.toString() + l1.next.next.value.toString();
  let corrected1 = strl1.split('').reverse().join('');
  let correctedNum1 = Number(corrected1);
  let strl2 = l2.value.toString() + l2.next.value.toString() + l2.next.next.value.toString();
  let corrected2 = strl2.split('').reverse().join('');
  let correctedNum2 = Number(corrected2);
  let summed = correctedNum1 + correctedNum2;
  // console.log(summed)
  let summedStr = summed.toString().split('').reverse();
  // console.log(summedStr)
  let l3 = new Node(summedStr[0]);
  let head = l3;
  for (let i = 1; i < summedStr.length; i += 1) {
    head.next = new Node(summedStr[i]);
    // l3.next = new Node(summedStr[i]);
    head = head.next;
  }
  return l3;
  // console.log(l3)
}

// let l1 = { value: 3, next: { value: 1, next: { value: 5, next: null } } };
// let l2 = { value: 5, next: { value: 9, next: { value: 2, next: null } } };
// addLinkedList(l1, l2);

module.exports = {Node: Node, addLinkedList: addLinkedList};
