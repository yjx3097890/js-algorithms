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

const arr = new Array(1000).fill(0).map((_) => Math.round(Math.random() * 1000));

const a =  makeBinarySearchTree(arr);


function toBalance(root) {

}

console.log(isBalancedBinaryTree(a));

const newRoot = toBalance(a);

console.log(isBalancedBinaryTree(newRoot));
console.log(newRoot);
