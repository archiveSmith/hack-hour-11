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
  const empty = { value: 0, next: null };

  let carry = 0;

  for (let i = l1, j = l2; i || j; i = i.next || empty, j = j.next || empty) {
    if (j === i) {
      return l1;
    }
    i.value = i.value + j.value + carry;
    carry = 0;
    if (i.value > 9) {
      i.value = i.value - 10;
      carry = 1;
    }
  }
}

// const ll1 = {
//   value: 3,
//   next: {
//     value: 1,
//     next: {
//       value: 5,
//       next: null
//     }
//   }
// }

// const ll2 = {
//   value: 5,
//   next: {
//     value: 9,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: null
//       }
//     }
//   }
// }

// console.log(addLinkedList(ll1, ll2));

module.exports = {Node: Node, addLinkedList: addLinkedList};
