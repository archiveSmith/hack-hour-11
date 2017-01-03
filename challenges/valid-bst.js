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

  let leftCheck = false;
  let rightCheck = false;

  function validate(tree) {
    if (tree.left) {
      if (tree.value >= tree.left.value) {
        return validate(tree.left);
      } else {
        return;
      }
    } else {
      leftCheck = true;
    }

    if (!leftCheck) {
      return leftCheck;
    }

    if (tree.right) {
      if (tree.value < tree.right.value) {
        return validate(tree.right);
      } else {
        return;
      }
    } else {
      rightCheck = true;
    }

    return rightCheck;
  }

  return validate(tree);
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
