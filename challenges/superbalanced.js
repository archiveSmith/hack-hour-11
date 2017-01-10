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

function superbalanced(tree) {
	const counterleft = [];
	const counterright = [];
	let i=0;

	function countT(tree,counterArr){
		let curr= tree
		while(curr.left !== null){
			counterArr.push(curr.left)
			curr= curr.left
		}
		while(curr.right !== null){
			counterArr.push(curr.left)
			curr=curr.right
		}
	}
	countT(tree,counterleft);
	countT(tree, counterright);
	
	if(counterright.length === counterleft.length){
		return true;
	}else{
		return false;
	}
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
