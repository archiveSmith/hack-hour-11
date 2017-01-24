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
  var node = new Node(val);

  if (this.head === null) {
  	this.head = node;
  }

  if (this.tail !== null) {
  	node.prev = this.tail;
	this.tail.next = node;
  }
	  
  this.tail = node;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
	var found = false;
	var current = this.head;

	while (current) {
		if (current.val === val) {
			found = true;
			break;
		}
		current = current.next;
	}

	if (found) {
		if (current === this.head) {
			current.next.prev = null;
			this.head = current.next;
		} else {
			if (current.next !== null) {
				current.prev.next = current.next;
			} else {
				current.prev.next = null;
			}

			if (current === this.tail) {
				this.tail = current.prev;
			}
		}
	}
};

module.exports = LinkedList;
