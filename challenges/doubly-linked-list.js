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
  if (!this.head) {
    this.head = new Node(val);
    this.tail = this.head;
  } else {
    this.tail.next = new Node(val);
    const temp = this.tail;
    this.tail = this.tail.next;
    this.tail.prev = temp;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let curr = this.head;

  while (curr && curr.val !== val) {
    curr = curr.next;
  }

  if (curr && curr.val === val) {
    if (curr === this.head) {
       this.head = curr.next;
    }
    
    let temp = curr;
    const returnVal = curr.val;

    if (curr.prev) {
      curr.prev.next = curr.next;
    }

    if (curr.prev && curr.prev.next !== null) {
      curr.next.prev = curr.prev;
    } else if (curr.prev && curr.prev.next === null) {
      this.tail = curr.prev;
    }
    temp = null;

    return curr.val;
  } else {
    return undefined;
  }
};

// LinkedList.prototype.print = function() {
//   let curr = this.head;
//   let printStr = '';

//   while (curr) {
//     printStr += curr.val + ' ';
//     curr = curr.next;
//   }
  
//   console.log(printStr)
// }


// const list = new LinkedList();

// list.add(1);
// list.add(2);
// list.add(3);
// list.add(4);
// list.add(5);

// //list.print();

// list.remove(3);

// list.print();

// list.remove(5);

// list.print();

// list.remove(4);

// list.print();

// list.add(10);

// list.print();

// console.log("TAIL VALUE:", list.tail.val);

module.exports = LinkedList;
