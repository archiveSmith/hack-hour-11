/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */

 function Node(val){
   this.value = val;
   this.next = null;
 }

 function deleteDups(head) {
   let control = head;
   let curr;
   let prev;

   while(control !== null){
     curr = control.next;
     prev = control;
     while (curr !== null) {
       if(control.value === curr.value){
         prev.next = curr.next;
       }
       curr = curr.next;
       prev = prev.next;
     }
     control = control.next;
   }

   return head;
 }

// let a = new Node(1);
// let b = new Node(2);
// let c = new Node(3);
// let d = new Node(3);
// let e = new Node(5);
//
// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
//
// console.log(deleteDups(a));

module.exports = deleteDups;
