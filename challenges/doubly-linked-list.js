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
   if (!val) {
     return false;
   }
   console.log('in add')
   let newNode = new Node(val);
   if (this.head === null) {
     this.head = newNode;
     this.tail = newNode;
   } else {
     this.tail.next = newNode;
     newNode.prev = this.tail;
     newNode.next = null;
     this.tail = newNode;
   }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
   if (!val) {
     return false;
   }
  //  console.log('in remove')
   let curr = this.head;
   while (curr) {
     if (curr.val === val) {
      //  console.log('found it')
       if (curr === this.tail) {
         this.tail = curr.prev;
         delete curr;
         this.tail.next = null;
         return;
       }
       if (curr === this.head) {
         this.head = curr.next;
         delete curr;
         this.head.prev = null;
         return;
       } else {
         curr.prev.next = curr.next;
         curr.next.prev = curr.prev;
         delete curr;
         return;
       }

     } else {
       if (curr.next) {
         curr = curr.next;
       } else {return false;}
     }




   }
  
};

let list = new LinkedList();

// list.add(4);
// list.add(6);
// list.add(8);
// list.remove(6);

// console.log(list);


module.exports = LinkedList;
