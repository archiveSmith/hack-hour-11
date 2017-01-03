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
    // if (this.left.value > this.value || this.right.value <= this.value) {
    //     return false;
    // } else {
    //     validBST(this.left);
    //     validBST(this.right);
    // }
    // return true;

    if (this.left === null && this.right === null) {
        return true
    }
    if (this.left.value > this.value || this.right.value <= this.value) {
        return false;
    } 
    if (validBST(this.right) && validBST(this.left)){
        return true
    } else {
        return false
    }

}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
