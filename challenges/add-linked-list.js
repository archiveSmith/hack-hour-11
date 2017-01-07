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

function addLinkedList(l1, l2) {
  let sumVal;
  let l1Val = 0;
  let l2Val = 0;
  let counter = 0;
  let sum;
  for(let i = l1; i; i = i.next) {
    l1Val += i.value * Math.pow(10, counter);
    counter += 1;
  }
  counter = 0;
  for(let i = l2; i; i = i.next) {
    l2Val += i.value * Math.pow(10, counter);
    counter += 1;
  }
  sum = (l2Val + l1Val).toString().split('').reverse();
  sumVal = new Node(parseInt(sum[0]));
  counter = 1;
  for(let i = sumVal; i; i = i.next) {
    if(counter >= sum.length) return sumVal;
    if(!i.next) {
      i.next = new Node(parseInt(sum[counter]));
      counter++;
    }
  }
}

const ll1 = {
  value: 3,
  next: {
    value: 1,
    next: {
      value: 5,
      next: null
    }
  }
}

const ll2 = {
  value: 5,
  next: {
    value: 9,
    next: {
      value: 2,
      next: null
    }
  }
}

console.log(addLinkedList(ll1, ll2));

module.exports = {Node: Node, addLinkedList: addLinkedList};
