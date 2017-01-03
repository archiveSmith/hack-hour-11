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
	console.log("Looking at value: ", tree.value, tree.left, tree.right);
	if (tree.value && (tree.left || tree.right)) {
		if (tree.left && tree.left.value <= tree.value) {
			console.log(tree.left.value, tree.value);
			validBST(tree.left);
		}

		if (tree.right && tree.right.value > tree.value) {
			console.log(tree.right.value, tree.value);
			validBST(tree.right);
		}

		return false;
	} else {
		return true;
	}
}

// var bt = new BinaryTree(5);
// bt.left = new BinaryTree(4);
// bt.left.left = new BinaryTree(3);
// bt.right = new BinaryTree(6);
// bt.right.right = new BinaryTree(7);
// bt.right.right.right = new BinaryTree(4);

// console.log(bt);

// console.log(validBST(bt));

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
