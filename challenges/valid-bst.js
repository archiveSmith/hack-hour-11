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

function minVal(tree) {
  if (!tree.left) return tree.value;
  return minVal(tree.left);
}

function maxVal(tree) {
  if (!tree.right) return tree.value;
  return maxVal(tree.right);
}

function validBST(tree) {
  // get min value of the tree
  const min = minVal(tree);
  // get max value of the tree
  const max = maxVal(tree);
  // if tree is single node return true
  if (!tree.left && !tree.right) return true;
  // if there is no min value and the current node value is greater than max return false
  // if there is no max value and the current node value is less than mid return false
  if ((min !== null && tree.value > max) || (max !== null && tree.value < min)) {
    return false;
  }
  // recursively check if the subtree on left is a valid bts, if not return false
  // recursively check if the subtree on right is a valid bts, if not return false
  if (!validBST(tree.left) || !validBST(tree.right)) {
    return false;
  }
  // passes all checks, return true
  return true;
}

const tree1 = {
  value : 5,
  left : {
    value: 2,
    left: {
      value: 1,
      left: null,
      right: null
    },
    right: {
      value: 3,
      left: null,
      right: null
    }
  },
  right: {
    value: 7,
    left: null,
    right: null
  }
};


module.exports = {BinaryTree: BinaryTree, validBST: validBST};
