/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be <= its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 */


function BinaryTree(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

function validBST(tree) {
  let result = true;

  //edge case
  if(tree.value === null) {
    return result;
  }

  //checking all lefts
  if(tree.left <= tree.val) {
    result = true;
    BinaryTree(tree.left);
  }
  else {
    result = false;
  }

  //checking all right;
  if(tree.right > tree.value) {
    result = true;
    BinaryTree(tree.right);
  }
  else {
    result = false;
  }

  return result;
}



module.exports = {BinaryTree: BinaryTree, validBST: validBST};
