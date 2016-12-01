/**
 * Write a function that takes an integer and the head of a singly linked list,
 * and returns the VALUE kth to last node in the list.
 *
 * var a = new Node('A');
 * var b = new Node('B');
 * var c = new Node('C');
 * var d = new Node('D');
 * var e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2,a); -> returns the node with the value 'D' (the second to last node)
 */
 function kthToLastNode(k, head) {
  let nodeArray = [];
  let counter = 0;

  if (k === undefined || head === undefined) {
    return undefined;
  }

  else{

   let current = head;

    while(current !== null) {
      nodeArray.push(current);
      current = current.next;
      counter += 1;
    }

    if (!nodeArray[nodeArray.length - k] || k > nodeArray.length - 1) {
      return undefined;
    }

    let answer = nodeArray[nodeArray.length - k];
    return answer.value;

  }
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
