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
    if (!head || !head.next) return head;

    let previous = null, current = head, next;

    while(current) {
        next = current.next;
        current.next = previous;
        previous = current;
        current = next; 
    }
    head = previous;
    
    return head;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
