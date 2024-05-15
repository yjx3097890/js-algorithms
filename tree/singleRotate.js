import {isBalancedBinaryTree} from "./balancedBinaryTree.js";


class Node {
    value = null;
    left = null;
    right = null;

    constructor(value) {
        this.value = value;
    }
}

const a = new Node('2');
const b = new Node('3');
const c = new Node('5');
const d = new Node('6');

a.right = c;
c.left = b;
c.right = d;

function getDeep(root) {
    if (root == null) return 0;
    const leftDeep = getDeep(root.left);
    const rightDeep = getDeep(root.right);
    return Math.max(leftDeep, rightDeep) + 1;
}

function leftRotate(root) {
    const newRoot = root.right;
    root.right = root.right.left;
    newRoot.left = root;
    return newRoot;

}

function rightRotate(root) {
    const newRoot = root.left;
    root.left = root.left.right;
    newRoot.right = root;
    return newRoot;
}

function rotateTree(root) {
    const leftDeep = getDeep(root.left);
    const rightDeep = getDeep(root.right);
    if (leftDeep - rightDeep > 1) {
        return rightRotate(root);
    } else if (rightDeep - leftDeep > 1) {
        return leftRotate(root);
    }
    return root;

}

console.log(isBalancedBinaryTree(a));

const newRoot = rotateTree(a);

console.log(isBalancedBinaryTree(newRoot));
console.log(newRoot);