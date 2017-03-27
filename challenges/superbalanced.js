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
  if (!tree.right && !tree.left) return true;
  let leftMaxH = 0;
  let rightMaxH = 0;

  function checkHeight(node, count) {
    if (!node.right && !node.left) return count;
    else if (node.right || node.left) {
      count += 1;
      if (node.right && node.left) {
        if (checkHeight(node.right, count) > checkHeight(node.left, count)) {
          return checkHeight(node.right, count);
        }
        return checkHeight(node.left, count);
      } else if (node.right) {
        return checkHeight(node.right, count);
      }
      return checkHeight(node.left, count);
    }
  };

  if (tree.left && tree.right) {
    leftMaxH = checkHeight(tree.left, 1);
    rightMaxH = checkHeight(tree.right, 1);
  } else if (tree.right) {
    rightMaxH = checkHeight(tree.right, 1);
  } else {
    leftMaxH = checkHeight(tree.left, 1);
  }

  // console.log([leftMaxH, rightMaxH]);
  return Math.abs(leftMaxH - rightMaxH) <= 1;

}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};

// const bst = new BinaryTree(10);
// bst.left = new BinaryTree(7);
// bst.right = new BinaryTree(15);
// bst.right.right = new BinaryTree(17);
// bst.right.right.right = new BinaryTree(19);
// bst.right.right.right.left = new BinaryTree(18);

// console.log(superbalanced(bst));
