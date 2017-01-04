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

<<<<<<< HEAD
BinaryTree.prototype.add = function(value) {
  let newTree = new BinaryTree(value);
  if (newTree.value < this.value) {
    if (!this.left) {
      this.left = newTree;
    } else {
      this.left.add(value);
    }
  }
  if (newTree.value > this.value) {
    if (!this.right) {
      this.right = newTree;
    } else {
      this.right.add(value);
    }
  }
};


let newTree = new BinaryTree(4);
newTree.add(4);
newTree.add(100);
newTree.add(6);
newTree.add(12);
newTree.add(8);
newTree.add(-10);
newTree.add(10);
newTree.add(-1);


function validBST(tree) {
  function rec(tree){
    if (tree.left && tree.left.value > tree.value) return false;
    if (tree.right && tree.right.value <= tree.value) return false;
    if (tree.left && tree.left.value <= tree.value) rec(tree.left);
    if (tree.right && tree.right.value > tree.value) rec(tree.right);
  }
  if (rec(tree) === undefined) return true;
  return rec(tree);
}

=======
function validBST(tree) {

}
>>>>>>> 8461b7a03aee64c4e8ba08c96d7b773a7c01d848

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
