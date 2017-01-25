'use strict';
/*
Create a doubly linked list with an add and remove method
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/*
Adds a node to the end of the list
 */
LinkedList.prototype.add = function(val) {
  if(this.head === null){
    this.head = new Node(val);
    this.tail = this.head;
  }else{
    this.tail.next = new Node(val);
    this.tail.next.prev = this.tail;
    this.tail = this.tail.next;

  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let node = null;
  let curr, prev;

  if(this.head.value === val){
    if(!this.head.next){
      node = this.head;
      this.head = null;
      return node;
    }
    this.head.next.prev = null;
    node = this.head;
    this.head = this.head.next;
    return node;
  }

  curr = this.head.next;
  prev = this.head

  while(curr){
    if(curr.value === val){
      prev.next = curr.next;
      node = curr;
      curr.next.prev = prev;
      return node;
    }
    curr = curr.next;
  }

  return node;
};

module.exports = LinkedList;
