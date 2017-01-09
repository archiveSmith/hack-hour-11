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
  let str1 = l1.value;
  str1 = str1.toString();

  str2 = l2.value;
  str2 = str2.toString();
  while (l1.next !== null) {
    str1 += l1.next.value;
    l1.next = l1.next.next;
  }
  while (l2.next !== null) {
    str2 += l2.next.value;
    l2.next = l2.next.next;
  }

  function reverseStr(str) {
    return str.split('').reverse().join('');
  }

  let newNum = parseInt(reverseStr(str1)) + parseInt(reverseStr(str2));
  newNum = newNum.toString().split('').reverse()
  console.log(newNum)
  let newCurr = new Node(Number(newNum[0]))
  let head = newCurr;
  for (let i = 1; i < newNum.length; i++) {
    head.next = new Node(Number(newNum[i]))
    head = head.next;
  }

  return newCurr;
}


module.exports = { Node: Node, addLinkedList: addLinkedList };
