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
  const num1 = getNums(l1);
  const num2 = getNums(l2);

  const sum = String(num1 + num2).split('').reverse();

  return makeLL(sum);

  function makeLL(arr) {
    const newLL = new Node(arr.shift());
    let cur = newLL;
    while(arr.length) {
      cur.next = new Node(arr.shift());
      cur = cur.next;
    }
    return newLL;
  }

  function getNums(head) {
    const num = [];
    let cur = head;
    while (cur) {
      num.push(cur.value);
      cur = cur.next;
    }
    return Number(num.reverse().join(''));
  }
}

// const L1 = new Node(3);
// L1.next = new Node(1);
// L1.next.next = new Node(5);

// const L2 = new Node(5);
// L2.next = new Node(9);
// L2.next.next = new Node(2);

module.exports = {Node: Node, addLinkedList: addLinkedList};
