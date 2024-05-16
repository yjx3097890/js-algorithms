// 判断一个二叉树是否是平衡二叉树

class Node {
    value = null;
    left = null;
    right = null;

    constructor(value) {
        this.value = value;
    }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');
const f = new Node('F');
const g = new Node('G');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

function getHeight(root) {
    if (root === null) return 0;
    return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
}

export function isBalancedBinaryTree(root) {
    if (root === null) return true;
    return Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1
        && isBalancedBinaryTree(root.left)
        && isBalancedBinaryTree(root.right);
}

// console.log(isBalancedBinaryTree(a));

