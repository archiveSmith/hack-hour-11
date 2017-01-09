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
  const root = tree.value;

  function getHeight(bst) {
    if (!bst) return 0;
    return Math.max(getHeight(bst.left), getHeight(bst.right)) + 1;
  }

  function isBalanced(bst) {
    if (!bst) return true;
    const diff = Math.abs(getHeight(bst.left) - getHeight(bst.right));
    return diff > 1 ? false : isBalanced(bst.left) && isBalanced(bst.right);
  }

  return isBalanced(root);
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};

