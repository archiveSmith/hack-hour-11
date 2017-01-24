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
   let current = this.head;
   if(!current){
     current = new Node(val);
     this.head = current;
     this.tail = current
   } else{
     current = new Node(val)

     this.tail.next = current
     current.prev = this.tail
     this.tail = current
   }
 };

 /*
 Removes the first node with the inputted value
  */
 LinkedList.prototype.remove = function(val) {
   let current = this.head;
   if(current.val === val){
     current.next.prev = null;
   } else if (this.tail.val === val) {
     this.tail.prev.next = null;
   } else {
     while(current.val !== val){
       current = current.next;
     }
     current.prev.next = current.prev.next.next;
     current.next.prev = current.next.prev.prev;
   }
 };

module.exports = LinkedList;
