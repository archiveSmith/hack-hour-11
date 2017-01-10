/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function superbalanced(tree) {
  
  function checkbalance(tree) {
    if (tree === null) {
      return 0;
    }

    const leftHeight = superbalanced(tree.left);
    if(leftHeight === -1) {
      return -1;
    }

    const rightHeight = superbalanced(tree.right);
    if(rightHeight === -1){
      return -1;
    }

    const diff = leftHeight-rightHeight;
    if(Math.abs(diff) > 1){
      return -1;
    }

    return 1 + Math.max(leftHeight, rightHeight);
  }

  return checkbalance(tree) > 0 ? true : false;
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
