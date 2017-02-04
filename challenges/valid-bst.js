/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be <= its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 *///
 

function BinaryTree(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

function validBST(tree) {
  let array = [];
  let i = 0;
    
  function toArray(tree, array) {
    if (!tree) return;

      toArray(tree.left, array);
      array[i++] = tree.value;
      toArray(tree.right, array);
    }
  toArray(tree, array );

  for (var j = 1; j < array.length; j++) {
    if (array[j] <= array[j-1]) return false;
  }
  return true;
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
