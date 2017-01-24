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
  if(this.head === null) {
    this.head = new Node(val);
    return;
  }
  if(this.tail === null){
    this.tail = new Node(val);
    this.tail.prev = this.head;
    this.head.next = this.tail;

    return;
  }else {
  let a = this.tail;
	this.tail = new Node(val);
	this.tail.prev = a;
	this.tail.prev.next= this.tail

  }

};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val, node = this.head) {
	if(!node) return this.head;
	if(node === this.head && node.val === val){
		this.head = this.head.next;
		this.head.prev = null;
	}
	if(node.val === val){
	  if(node === this.head) this.head = this.head.next;
	  if(node === this.tail) this.tail = this.tail.prev
	  	node.prev.next = node.next;
		if(node.next){
		  node.next.prev = node.prev;
		}
		return this.head;
	}
	this.remove(val, node.next);

  
};


module.exports = LinkedList;
