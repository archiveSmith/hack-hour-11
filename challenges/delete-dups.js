/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function deleteDups(head) {
    if (!head) {
        return false;
    }
    let seenSoFar = {};
    let curr = head;
    while (curr) {
        // console.log('in while loop curr is ' + curr.value)
      if (curr.next) {
        //   console.log('in if curr.next')
        if (seenSoFar[curr.next.value]) {
            temp = curr.next.next;
            // console.log('deleted ' + curr.next.value)
            delete curr.next;
            curr.next = temp;
        } else {
            // console.log('storing ' + curr.next.value + ' into object')
            seenSoFar[curr.next.value] = true;
        } 
      } curr = curr.next;
    }
    return head;
    // console.log(JSON.stringify(head));

}

let head = new Node(3);
let node1 = new Node(4);
let node2 = new Node(5);
let node3 = new Node(6);
let node4 = new Node(7);

head.next = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;

deleteDups(head);


module.exports = deleteDups;
