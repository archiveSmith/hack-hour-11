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
  if(!l1 || !l2) return NaN;
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

  let number = parseInt(sl1.split('').reverse().join('')) + parseInt(sl2.split('').reverse().join(''));
  number = number.toString().split('');
  let head = new Node(parseInt(number[0]));
  let node, current = head;

  let i = 1;
  while(number[i]){
    node = new Node(parseInt(number[i]));
    current = current.next = node;
    i++;
  }

  return head;
}

let l1 = new Node(5);
l1.next = new Node(9);
l1.next.next = new Node(2);

let l2 = new Node(3);
l2.next = new Node(1);
l2.next.next = new Node(5);

console.log(addLinkedList(l1, l2));

module.exports = {Node: Node, addLinkedList: addLinkedList};
