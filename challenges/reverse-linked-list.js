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
  let newHead = null;
  
  function recurse(head){
    if(head.next === null){
      newHead = head;
      return head;
    }else{
      reverseLinkedList(head.next).next = head;
      return head;
    }
  }
  recurse(head);
  return newHead;
}

let a = new Node(1);
let b = new Node(2);
let c = new Node(3);
let d = new Node(4);
let e = new Node(5);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(reverseLinkedList(a));


//module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
