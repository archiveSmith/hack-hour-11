'use strict';
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
  let firstTruth = true;
  let secondTruth = true;

  if(tree.left)
    if((tree.left.left || tree.left.right) && (!tree.right.left && !tree.right.right))
      return false;
    else
      firstTruth = superbalanced(tree.left);

  if(tree.right)
    if((tree.right.left || tree.right.right) && (!tree.left.left && !tree.left.right))
      return false;
      else
        secondTruth = superbalanced(tree.left);

  return (!firstTruth || !secondTruth);
}

// const tree = new BinaryTree(12);
//
// tree.left = new BinaryTree(10);
// tree.left.right = new BinaryTree(11);
// tree.left.left = new BinaryTree(9);
//
// tree.right = new BinaryTree(19);
// tree.right.right = new BinaryTree(22);
// tree.right.left = new BinaryTree(17);
// tree.right.right.left = new BinaryTree(5);

//console.log(superbalanced(tree));

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
