/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (3 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 8 -> 0 -> 8
 *
 */
//
function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
let strNum1 = ''
let strNum2 = ''

let head = l1;

while (head !== null) {
  console.log(head.value)
  strNum1 += parseInt(head.value);
  head = head.next;
}

head = l2
while (head !== null) {
  console.log(head.value)
  strNum2 += parseInt(head.value);
  head = head.next;
}

strNum1 = strNum1.split('').reverse().join('');
strNum2 = strNum2.split('').reverse().join('');

let resultNum = parseInt(strNum1) + parseInt(strNum2);

let array = resultNum.toString().split('');

let l3 = new Node(parseInt(array[array.length-1]))

head = l3

for (let i = array.length-2; i>=0; i--){
  head.next = new Node(parseInt(array[i]));
  head = head.next
}

return l3;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
