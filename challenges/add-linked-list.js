/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (3 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 8 -> 0 -> 8
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

Node.prototype.add = function(val){
  let current = this;
  
  while (current.next !== null){
    current = current.next;
    
  }
  current.next = new Node(val)
}


function addLinkedList(l1, l2) {
	let num1 = [];
	let num2 = [];

	let curr1 = l1;
	let curr2 = l2;

	while (curr1 !== null){
		num1.push(curr1.value);
		curr1 = curr1.next;
	}

	while (curr2 !== null){
		num2.push(curr2.value);
		curr2 = curr2.next;
	}
	
	num1 = num1.reverse().join('');
	num2 = num2.reverse().join('');
	
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	
  newNum = num1 + num2;
  
  let firstIndex = newNum.toString()[0];
  
	
  let newLL = new Node(parseInt(firstIndex));
  
  let numString = newNum.toString();
  
  for (let i = 1; i < numString; i++){
    newLL.add(parseInt(numString[i]))
  }
  
return newLL;
  

}

module.exports = {Node: Node, addLinkedList: addLinkedList};
