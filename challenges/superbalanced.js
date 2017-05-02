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
  if (!tree.left && !tree.right) {
    return true;
  }
  let deepestSoFarLeft = 0;
  let deepestSoFarRight = 0;
  let count = 1;
 
  if (tree.right) {
    recurse(tree.right, count, 'right');
  }
  if (tree.left) {
    recurse(tree.left, count, 'left');
  }

  console.log('left depth: ', deepestSoFarLeft);
  console.log('right depth: ', deepestSoFarRight);
  
  return (Math.abs(deepestSoFarRight - deepestSoFarLeft)) <= 1;

  function recurse(curr, count, side) {
    // console.log(side);
    if (curr.left) {
      // console.log("checking left ", curr.left.value)
      recurse(curr.left, count+1, side);
    }

    if (curr.right) {
      // console.log("checking right ", curr.right.value, side)
      recurse(curr.right, count+1, side);
    } else { 
      // console.log('count is: ' + count);
        if (side === 'left') {
          if (count > deepestSoFarLeft) {
            deepestSoFarLeft = count;
          }
        }
        if (side === 'right') {
          if (count > deepestSoFarRight) {
            deepestSoFarRight = count;
          }
        }
      return; }

      
    

  }
}

// let tree = new BinaryTree(5);
// tree.left = new BinaryTree(3);
// tree.right = new BinaryTree(10);
// tree.left.left = new BinaryTree(2);
// tree.left.right = new BinaryTree(4);
// tree.right.left = new BinaryTree(7);
// tree.right.right = new BinaryTree(12);
// tree.right.right.right = new BinaryTree(14);
// // tree.right.right.right.right = new BinaryTree(15);

// console.log(superbalanced(tree));

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
