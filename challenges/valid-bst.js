/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be <= its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 */

// const bst = new BinaryTree(10);
// bst.right = new BinaryTree(11);
// bst.left = new BinaryTree(7);
// bst.left.right = new BinaryTree(8);
// bst.left.right = new BinaryTree('a');
// console.log(bst);
// console.log(validBST(bst));


function BinaryTree(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

function validBST(tree) {
  const flatTree = getArray(tree);

  for (let l = flatTree.length - 1, i = 0; i < l; i += 1) {
    if (flatTree[i] > flatTree[i + 1]) return false;
  }

  return true;
  
  function getArray(node, arr = []) {
    if (node.left) getArray(node.left, arr);
    arr.push(node.value);
    if (node.right) getArray(node.right, arr);
    return arr;
  }
}


module.exports = {BinaryTree: BinaryTree, validBST: validBST};
