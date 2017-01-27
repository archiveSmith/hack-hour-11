/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be <= its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 */
<<<<<<< HEAD
=======
 
>>>>>>> 1a7485c2a025fa8d3cb0d86037701456406ed848

function BinaryTree(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

function validBST(tree) {
<<<<<<< HEAD
  if (!this.value) return true;
  else if (this.left > this.value || this.right <= this.value) return false;
  else return validBST(this.left) || validBST(this.right);
}



module.exports = {BinaryTree: BinaryTree, validBST: validBST};
=======

}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
>>>>>>> 1a7485c2a025fa8d3cb0d86037701456406ed848
