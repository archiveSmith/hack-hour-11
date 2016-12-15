"use strict";
/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
  if(!head) return null;
  let start;

  function recurse(head){
    if(head.next === null){
       start = head
       return head;
    }

    recurse(head.next).next = head;
    return head;
  }
  recurse(head);
  head.next = null;
  return start;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
