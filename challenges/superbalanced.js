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
<<<<<<< HEAD
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
    return superbalanced(tree.left) || superbalanced(tree.right);
    
  }
}


module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
=======

}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
>>>>>>> 1a7485c2a025fa8d3cb0d86037701456406ed848
