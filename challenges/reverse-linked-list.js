/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */
 'use strict'

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
  let c = head;
  let llvals = [];
  while (c.next) {
    llvals[llvals.length] = c.value;
    c = c.next
  }

  llvals[llvals.length] = c.value;

  c = head;
  let i = llvals.length - 1;
  while (head.next) {
  	head.value = llvals[i];
  	head = head.next
  	i--;
  }

  return c;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
