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

// function validBST(tree) {
// 	if (tree.left && tree.value >= tree.left.value) {
// 		return validBST(tree.left) ;
// 	} else if(!tree.left) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// 	if (tree.right && tree.value < tree.right.value) {
// 		return validBST(tree.right);
// 	} else if(!tree.right) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// 	return true;
// }

function validBST(tree) {
	if(!tree.left && !tree.right) {
		return true;
	}
	if(!tree.left) {
		if(tree.right.value > tree.value) {
			return validBST(tree.right)
		}
	} else if (tree.left.value < tree.value) {
			return validBST(tree.left)
	} 
	return validBST(tree.left) && validBST(tree.right)
}

const BST = {
	value: 5,
	left: {
		value: 3,
		left: {
			value: 2,
			left: null,
			right: null
		},
		right: {
			value: 4,
			left: null,
			right: null,
		}
	},
	right: {
		value: 7,
		left: {
			value: 6,
			left: null,
			right: null,
		},
		right: {
			value: 8,
			left: null,
			right: null
		}
	}
};

console.log(validBST(BST));

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
