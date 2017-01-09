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
   let leftCount = 0;
   let rightCount = 0;
   let currentRight = tree.right;
   let currentLeft = tree.left;
   while((currentRight !== null || currentRight !== null) || (currentLeft !== null || currentLeft !== null)) {
     if(currentRight !== null){
     currentRight = currentRight.right;
     rightCount++;
     }
     if(currentLeft !== null) {
     currentLeft = currentLeft.left;
     leftCount++
     }
   }
   if(leftCount - rightCount > 1 || rightCount - leftCount > 1) return false;

   return true;
 }

 

 superbalanced(BST)







module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
