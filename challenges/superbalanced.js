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
  if (!tree) return true;
  else {
    if (!tree.left || !tree.right) {
      if (!tree.left) {
        if (tree.right) {
          if (tree.right.right || tree.right.left) return false;
        }
      }
      if (!tree.right) {
        if (tree.left) {
          if (tree.left.left || tree.left.right) return false;
        }
      }
    }
    if (tree.left && tree.right) return superbalanced(tree.left) || superbalanced(tree.right);
    else if (tree.left) return superbalanced(tree.left);
    else return superbalanced(tree.right);
  }
}


module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};