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
	if (!this.head){
		this.head = new Node(val);
		this.tail = new Node(val)

	}
	else {
		this.tail = new Node(val)
	}

};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {

	let current = this.head;

	while(!current){
		if (current.val === val){
			let forward = this.next;
			this.prev.next = forward; 
			return
		}
		current = current.next
	}

  
};

module.exports = LinkedList;
