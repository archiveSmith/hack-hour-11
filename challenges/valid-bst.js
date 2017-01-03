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
    let flag = true;

    const checker = (node) => {
        //check right side
        if (node.right) {
            if (node.right.value < node.value) {
                flag = false;
                return;
            } else {
                checker(node.right);
            }
        }
        //check left side 
        if (node.left) {
            if (node.left.value > node.value) {
                flag = false;
                return;
            } else {
                checker(node.left);
            }
        }
    };

    checker(tree);

    return flag;
}



module.exports = {
    BinaryTree: BinaryTree,
    validBST: validBST
};