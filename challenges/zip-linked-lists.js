/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */


 function Node(val) {
   this.value = val;
   this.next = null;
 }

 function zip(l1, l2) {
   let first = l1;
   let curr = l1;
   l1 = l1.next;

   while( curr.next){
     curr.next = l2;
     l2 = l2.next;
     curr = curr.next;

     if(l1.next === null) break;

     curr.next = l1;
     l1 = l1.next;
     curr = curr.next;
   }

   return first;
 };

module.exports = {Node: Node, zip: zip};
