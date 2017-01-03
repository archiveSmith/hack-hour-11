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
    if (!tree) {
        return false;
    }
    let isBalanced = true;
    recurse(tree);

    function recurse(curr) {
        //console.log('curr is now ' + curr.value)
        if (curr.left !== null) {
            if (curr.left.value <= curr.value) {
                recurse(curr.left);
            } else {
                isBalanced = false;
                
            }
        }
        if (curr.right !== null) {
            if (curr.right.value >= curr.value) {
                recurse(curr.right);
            } else {
                isBalanced = false;
                
            }
        } return;
    } 
    
    return isBalanced;

}

let tree = new BinaryTree(6);
// tree.left = new BinaryTree(3);
// tree.right = new BinaryTree(9);
// tree.left.left = new BinaryTree(1);
// tree.right.right = new BinaryTree(12);

console.log(validBST(tree));

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
