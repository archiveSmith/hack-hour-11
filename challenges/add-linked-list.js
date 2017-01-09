/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (3 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 8 -> 0 -> 8
 *
 */

<<<<<<< HEAD
function LinkedList() {
  this.head = null;
  this.tail = null;
}

=======
>>>>>>> 12c336b064f3f51fe66429a2209bf47c3c79daff
function Node(val) {
  this.value = val;
  this.next = null;
}

<<<<<<< HEAD
// adds node to end of list
LinkedList.prototype.push = function (value) {
  const newNode = new Node(value);
  if (this.head === null) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
};

let l1 = new LinkedList;
let l2 = new LinkedList;
l1.push(4)
l1.push(1)
l1.push(5)
l2.push(5)
l2.push(9)
l2.push(2)

console.log(l1)
console.log(l2)

function addLinkedList(l1, l2) {
  let list1 = "";
  let list2 = "";
  console.log("l1", l1, "l2", l2);
  for (let i = l1; i; i = i.next){
    list1 += i.value.toString()
  }
  for (let i = l2; i; i = i.next){
    list2 += i.value.toString()
  }
  console.log(list1,list2)
  list1 = parseInt(list1.split("").reverse().join(""))
  list2 = parseInt(list2.split("").reverse().join(""))
  console.log(list1,list2)
  let newNum = list1 + list2;
  newNum = newNum.toString().split("");
  console.log("This should be an array", newNum);
  let result = new LinkedList;
  while (newNum.length){
    result.push(parseInt(newNum.pop()))
    console.log("hi")
  }
  console.log(result)
  return result.head;
}

addLinkedList(l1.head,l2.head);
=======
function addLinkedList(l1, l2) {

}
>>>>>>> 12c336b064f3f51fe66429a2209bf47c3c79daff

module.exports = {Node: Node, addLinkedList: addLinkedList};
