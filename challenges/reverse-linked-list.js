/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
    let prev = null;
    let curr = head;
    let next;
    while (curr) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    head = prev;
    console.log(head);
    return head;

}

node1 = new Node(3);
node2 = new Node(2);
node3 = new Node(8);
node4 = new Node(4);
node5 = new Node(1);
node6 = new Node(6);
node7 = new Node(7);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;

reverseLinkedList(node1);



module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
