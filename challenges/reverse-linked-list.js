/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 * 
get to the end of the LL, assign that to head
the make head.next equal to the next one..

make a counter to counter the LL..
then go down counter to add them...
 */
function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
    //grab last Node
    //make it = to new Node
    //remove that last node
    //new node.next equals the next last one. 

    let current = head;
    let newNode = new Node;
    newNode.value = null;

    while (current.next !== null){
        current = current.next;
        if (current.next === null){
            if (newNode.value === null){
                newNode.value = current.value;
            }
            else{
                newNode.next = current;
            }
        }
    }


}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
