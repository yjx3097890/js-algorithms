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

const a = new Node('8');
const b = new Node('5');
const c = new Node('2');
const d = new Node('7');
const e = new Node('6');

a.left = b;
b.left = c;
b.right = d;
d.left = e;


function toBalance(root) {

}

console.log(isBalancedBinaryTree(a));

const newRoot = toBalance(a);

console.log(isBalancedBinaryTree(newRoot));
console.log(newRoot);
