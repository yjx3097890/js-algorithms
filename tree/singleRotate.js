import {isBalancedBinaryTree} from "./balancedBinaryTree.js";

// 将二叉树变为平衡二叉树

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


function rotateTree(root) {

}

console.log(isBalancedBinaryTree(a));

const newRoot = rotateTree(a);

console.log(isBalancedBinaryTree(newRoot));
console.log(newRoot);
