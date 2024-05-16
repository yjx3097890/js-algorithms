import {isBalancedBinaryTree} from "./balancedBinaryTree.js";
import {makeBinarySearchTree} from "./BSTSearch.js";


// 将二叉树变为平衡二叉树

class Node {
    value = null;
    left = null;
    right = null;

    constructor(value) {
        this.value = value;
    }
}

const arr = new Array(10000).fill(0).map((_) => Math.round(Math.random() * 1000));

const a =  makeBinarySearchTree(arr);

function getDeep(root) {
    if (root == null) return 0;
    const leftDeep = getDeep(root.left);
    const rightDeep = getDeep(root.right);
    return Math.max(leftDeep, rightDeep) + 1;
}

// 左旋
function leftRotate(root) {
    const newRoot = root.right;
    root.right = root.right.left;
    newRoot.left = root;
    return newRoot;
}

// 右旋
function rightRotate(root) {
    const newRoot = root.left;
    root.left = root.left.right;
    newRoot.right = root;
    return newRoot;
}

function toBalance(root) {
    if (isBalancedBinaryTree(root)) return root;
    root.left = toBalance(root.left);
    root.right = toBalance(root.right);
    const leftDeep = getDeep(root.left);
    const rightDeep = getDeep(root.right);
    if (leftDeep - rightDeep > 1) {
        const rightDeep = getDeep(root.left.right);
        const leftDeep = getDeep(root.left.left);
        if (rightDeep > leftDeep) {
            root.left = leftRotate(root.left);
        }
        const newRoot = rightRotate(root);
        newRoot.right = toBalance(newRoot.right);
        return toBalance(newRoot);
    } else if (rightDeep - leftDeep > 1) {
        const rightDeep = getDeep(root.right.right);
        const leftDeep = getDeep(root.right.left);
        if (leftDeep > rightDeep) {
            root.right = rightRotate(root.right);
        }
        const newRoot = leftRotate(root);
        newRoot.left = toBalance(newRoot.left);
        return toBalance(newRoot);
    }
    return root;
}

console.log(isBalancedBinaryTree(a));

// 二叉搜索树查找

let count =0;
function BSTSearch(root, target) {
    if (root === null) {
        return false;
    }
    count++;
    if (root.value === target) {
        return true;
    }
    if (target < root.value) {
        return BSTSearch(root.left, target);
    } else {
        return BSTSearch(root.right, target);
    }
}

console.log(BSTSearch(a, 888));
console.log(count);

const newRoot = toBalance(a);

console.log(isBalancedBinaryTree(newRoot));

count = 0;
console.log(BSTSearch(newRoot, 888));
console.log(count);

