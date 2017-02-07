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

function zip(l1, l2, zipped) {
  debugger;
  if (!l1 && !l2) return zipped;
  if (!zipped) {
    zipped = new Node(l1.value)
    return zip(l2, l1.next, zipped);
  };
  for (let i = zipped; i; i = i.next) {
    if (!i.next) { 
      if (l1) {
        i.next = new Node(l1.value);
        return zip(l2, l1.next, zipped);
      } 
      else if (l2) {
        i.next = new Node(l2.value);
        return zip(l1, l2.next, zipped);
      }
      else {
        return zipped;
      }
    }
  }
};

const first = {
  value: 1,
  next: {
    value: 3,
    next: {
      value: 5,
      next: {
        value: 6,
        next: null
      }
    }
  }
};

const second = {
  value: 2,
  next: {
    value: 4,
    next: null
  }
};

console.log(zip(first, second));

module.exports = {Node: Node, zip: zip};
