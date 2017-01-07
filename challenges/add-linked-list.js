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
  if (!l1 || !l2) {
    return false;
  }

  list1 = '';
  list2 = '';

  curr1 = l1;
  curr2 = l2;

  while (curr1) {
    list1 += curr1.value.toString();
    curr1 = curr1.next;
  }

  while (curr2) {
    list2 += curr2.value.toString();
    curr2 = curr2.next;
  }

  let reverseSum = (parseInt(list1.split('').reverse().join('')) + parseInt(list2.split('').reverse().join(''))).toString();
  console.log(reverseSum);
  
  let newList = reverseSum.split('').reverse().join('');
  
  let head = new Node(newList[0]);
  let current = head;
  if (newList.length > 1) {
    head.next = new Node(newList[1]);
    current = head.next;
  }

  for (let i=1; i<newList.length-1; i++) {
      // console.log(newList[i+1])
      current.next = new Node(newList[i+1]);
      current = current.next;
  }

  return head;



}

node1 = new Node(3);
node2 = new Node(6);
node3 = new Node(8);
node4 = new Node(1);
node5 = new Node(4);
node6 = new Node(2);

node1.next = node2;
node2.next = node3;
node4.next = node5;
node5.next = node6;

// console.log(node1)

// console.log(addLinkedList(node1, node4))

module.exports = {Node: Node, addLinkedList: addLinkedList};
