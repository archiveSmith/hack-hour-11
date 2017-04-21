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

function getHeight(bst) {
  if (!bst) {
    return 0;
  }

  return 1 + Math.max(getHeight(bst.right), getHeight(bst.left));
}

function superbalanced(tree) {

  if (!tree) return true;   
  
  const leftHeight = getHeight(tree.left);
  const rightHeight = getHeight(tree.right);

  return Math.abs(leftHeight - rightHeight) <= 1 && superbalanced(tree.left) && superbalanced(tree.right);
}













// function superbalanced(tree) {
  
//   function checkbalance(tree) {
//     if (tree === null) {
//       return 0;
//     }

//     const leftHeight = checkBalance(tree.left);

//     const rightHeight = checkBalance(tree.right);

//     //const diff = Math.abs(leftHeight - rightHeight);
//     return 1 + Math.abs(leftHeight - rightHeight);
//   }

//   return checkbalance(tree) > 0 ? true : false;
// }



module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
