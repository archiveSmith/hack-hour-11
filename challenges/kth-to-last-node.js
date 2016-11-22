/**
 * Write a function that takes an integer and the head of a singly linked list,
 * and returns the VALUE kth to last node in the list.
 *
 * var a = new Node('A');
 * var b = new Node('B');
 * var c = new Node('C');
 * var d = new Node('D');
 * var e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2,a); -> returns the node with the value 'D' (the second to last node)
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
  this._length = 0;
}

function Node(val) {
  this.value = val;
  this.next = null;
  this.before = null;
}

LinkedList.prototype.push = function (val) {
  let currentNode = this.head;
  if (!currentNode) {
    this.head = new Node(val);
    this.tail = this.head;
    this._length += 1;
    return this;
  }
  while (currentNode.next) {
    currentNode = currentNode.next;
  }
  currentNode.next = new Node(val);
  currentNode.next.before = currentNode;
  this.tail = currentNode.next;
  this._length +=1;
  return this;
};

let myLinkedList = new LinkedList();
myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.push(4);
myLinkedList.push('last');

console.log(myLinkedList);

function kthToLastNode(k, head) {
  let currentNode = head;
  let count = 0;
  while (currentNode.next) {
    currentNode = currentNode.next;
  }
  while (count <= k) {
    currentNode = currentNode.before;
    count += 1;
  }
  return currentNode;
}

module.exports = { Node: Node, kthToLastNode: kthToLastNode };
