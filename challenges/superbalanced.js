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

  let balanced = true;

  function checkBalanced(tree) {

    if (!tree.left && !tree.right) {
      return;
    }

    if (!tree.left) {
      if (tree.right) {
        if (tree.right.right) {
          //return false;
          balanced = false;
        }
      }
    } else {
      checkBalanced(tree.left);
    }

    if (!tree.right) {
      if (tree.left) {
        if (tree.left.left) {
          //return false;
          balanced = false;
        }
      }
    } else {
      checkBalanced(tree.right);
    }
  }

  checkBalanced(tree);
  
  return balanced;//checkBalanced(tree) === undefined && balanced;
}

// let tree1 = new BinaryTree(5);
// let tree2 = new BinaryTree(6);
// let tree3 = new BinaryTree(7);
// let tree4 = new BinaryTree(2);
// let tree5 = new BinaryTree(3);

// let tree6 = new BinaryTree(8);
// //let tree7 = new BinaryTree(9);

// tree1.left = tree4;
// tree4.right = tree5;

// tree1.right = tree2;
// tree2.right = tree3;
// //tree3.right = tree6;
// //tree6.right = tree7;

// console.log(superbalanced(tree1));

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
