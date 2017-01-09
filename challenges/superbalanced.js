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
  return treeHeight(tree) === -1 ? false : true;

  function treeHeight(node) {
    if (node === null) return 0;
    if (node.left === null && null.right === null) return 1;
    const left = treeHeight(node.left);
    const right = treeHeight(node.right);

    if (left === -1 || right === -1) return -1;
    if (Math.abs(left - right) > 1) return -1;

    return Math.max(left, right) + 1;
  }
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
