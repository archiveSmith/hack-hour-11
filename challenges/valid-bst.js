/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be <= its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 */

const bst = new BinaryTree(10);
bst.right = new BinaryTree(12);
bst.left = new BinaryTree('a');
bst.left.left = new BinaryTree(3);
bst.left.right = new BinaryTree('a');
console.log(bst);
console.log(validBST(bst));


function BinaryTree(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

function validBST(tree) {
  if (typeof tree.value !== 'number') return false;
  let rightValid = false;
  let leftValid = false;

  function checkRight(node) {
    if (!node.right) rightValid = true;
    else {
      if (node.right.value > node.value) rightValid = true;
      return validBST(node.right);
    }
  }

  function checkLeft(node) {
    if (node.left) {
      if (node.left.value > node.value) return false;
      return validBST(node.left);
    }
  }
  return true;
}


module.exports = {BinaryTree: BinaryTree, validBST: validBST};

// if (tree.right) {
//   if (tree.right.value < tree.value) return false;
//   return validBST(tree.right);
// }
// if (tree.left) {
//   if (tree.left.value > tree.value) return false;
//   return validBST(tree.left);
// }
