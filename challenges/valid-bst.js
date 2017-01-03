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

		if (tree.right === null && tree.left === null){
		return true
	}
	else if (tree.left !== null){
		if (tree.left.value > tree.value){
			return false
		}
		else {
			return validBST(tree.left)
		}
	}
	else if (tree.right !== null){
		
		if (tree.right.value < tree.value){
			return false
		}
		else {
			return validBST(tree.right);

		}
	}


}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
