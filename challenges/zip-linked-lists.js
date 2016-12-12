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
  // let l1 = Object.assign({}, list1); // good practice - clone and preserve arg
  // let l2 = Object.assign({}, list2);
  if (!l1) return l2; // no need to zip if only one list given
  if (!l2) return l1;

  const head = l1;
  let tail = l1;
  l1 = l1.next; // shifting down list

  while (l1 || l2) {
    tail.next = l2; // add l2 element to main chain
    l2 = l2.next; // shift l2 chain
    tail = tail.next; // reset tail

    tail.next = l1; // add l1 element to main chain
    l1 = l1.next; // shift l1 chain
    tail = tail.next; // reset tail
  }
  tail.next = l2 || l1;
  return head;
}


// //UNSUCESSFUL ATTEMPT 1
//   let old;
//   for (l1; l1.next || l2.next; l1.next, l2.next) {
//     let old = l1.next;
//     let old2 = l2.next;
//     l1.next = l2;
//     l2.next = old;
//     old.next = old2;
//   }
//   return l1;

  // BASIC ARRAY ZIP FOR COMPARISON
  // let arr=[]
  // for(let i =0; i < l1.length; i++){
  //   arr.push(l1[i])
  //   arr.push(l2[i]);
  // }
  // return arr;


module.exports = {Node: Node, zip: zip};
