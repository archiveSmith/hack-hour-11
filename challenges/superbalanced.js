/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function leftHeight(tree, height) {
	if (tree.value) {
		if (tree.left) {

		}
	} else {
		return height;
	}
}

function rightHeight(tree, height) {
	if (tree.value) {
		if (tree.right) {
			
		}
	} else {
		return height;
	}
}

function superbalanced(tree) {
	if (!tree.value) {
		return true;
	}

	if (Math.abs(leftHeight(tree.left, 1) - rightHeight(tree.right, 1)) <= 1) {
		return true;
	} else {
		return false;
	}
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
