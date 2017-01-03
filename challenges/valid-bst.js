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
  if (typeof tree.value !== 'number') return false;
  if (tree.right) {
    if (tree.right.value < tree.value) return false;
    return validBST(tree.right);
  }
  if (tree.left) {
    if (tree.left.value > tree.value) return false;
    return validBST(tree.left);
  }
  return true;
}



module.exports = {BinaryTree: BinaryTree, validBST: validBST};

const bst = new BinaryTree(10);
bst.left = new BinaryTree(9);
bst.left.right = new BinaryTree(12);
console.log(bst);
console.log(validBST(bst));
