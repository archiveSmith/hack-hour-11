'use strict';

/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  let temp, temp2;
  if (!l1) return l2;
  if (!l2) return l1;
  if (l1.next === null) {
    if (l2) l1.next = l2;
    return l1;
  }
  if (l2.next === null) {
    temp = l1.next;
    l1.next = l2;
    l2.next = temp;
    return l1;
  }
  if (l1.next && l2.next) {
    temp = l1.next;
    l1.next = l2;
    temp2 = l2.next;
    l2.next = temp;
    zip(temp, temp2);
    return l1;
  }
}

module.exports = {Node: Node, zip: zip};

const ll1 = null;
const ll2 = { 'value': 2, 'next': { 'value': 4, 'next': { 'value': 6, 'next': null } } };

console.log(JSON.stringify(zip(ll1, ll2)));
