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
  let nodeOne = l1; //val: 3; next: 1;
  let nodeTwo = l2; //val: 5; next: 9
  let newNode = new Node(nodeOne.value + nodeTwo.value);
  let current;
  let remainderOne;
  let remainderTwo;
  while(l1 !== null || l2 !== null) {
    if (newNode.value > 9) {
      JSON.stringify(newNode.value);
      let valueArr = newNode.value.split('');
      remainderOne = JSON.parse(valueArr[1]);
      remainderTwo = JSON.parse(valueArr[0]);
      newNode.value = remainderOne;
      current = newNode;
      nodeOne = nodeOne.next;
      nodeTwo = nodeTwo.next;
      newNode = new Node(nodeOne.value + remainderTwo + nodeTwo.value);
      current.next = newNode;
      current = current.next;
    }
    current = newNode;
    nodeOne = nodeOne.next;
    nodeTwo = nodeTwo.next;
    newNode = new Node(nodeOne.value + nodeTwo.value);
    current.next = newNode;
    current = current.next;
  }
  return current;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
