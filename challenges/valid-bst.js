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
//   if (this.left === null && this.right === null) {
//     return true;
//   } else if (this.left > this.left.value || this.right.value < this.value) {
//     return false;
//   }
//   if (validBST(this.left) && validBST(this.right)) {
//     return true;
//   }
// }

//---
function validBST(tree) {
   if (tree === null) return true;

  if (tree.left != undefined && tree.left.value > tree.value) {
    return false;
  }

  if (tree.right != undefined && tree.right.value <= tree.value) {
    return false;
  }

  return validBST(tree.left) && validBST(tree.right);
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};

// function isBST(tree) {
//   if (tree === null) return true;

//   if (tree.left != undefined && tree.left.value > tree.value) {
//     return false;
//   }

//   if (tree.right != undefined && tree.right.value <= tree.value) {
//     return false;
//   }

//   return isBST(tree.left) && isBST(tree.right);
// }









//
//isBinary(root)
//    {
//        if root == null 
//          return true
//       else if( root.left == NULL and root.right == NULL)
//          return true
//       else if(root.left == NULL)
//           if(root.right.element > root.element)
//               rerturn isBInary(root.right)
//        else if (root.left.element < root.element)
//              return isBinary(root.left)
//        else
//              return isBInary(root.left) and isBinary(root.right)
//
//    }