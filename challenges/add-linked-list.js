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
    return undefined
  }
  
  let l1Arr = [];
  let l2Arr = [];
  let node1 = l1
  let node2 = l2
  let answerNode;
  
  while(node1) {
    l1Arr.unshift(node1.value);
    node1 = node1.next;
  }  
  
  while(node2) {
    l2Arr.unshift(node2.value);
    node2 = node2.next;
  }
  
  let answer = (parseInt(l1Arr.join('').toString()) + parseInt(l2Arr.join('').toString())).toString().split('')

  for (let i = 0; i < answer.length - 1; i += 1) {
    answerNode = new Node(answer[i])
    answerNode.next = new Node(answer[i + 1])
  }
  
  return answer
  
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
