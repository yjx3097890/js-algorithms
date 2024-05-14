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

function deepFirstSearch(root, target) {
    if (root == null) return false;
    if (root.value === target) return true;
    return deepFirstSearch(root.left, target) || deepFirstSearch(root.right, target);
}

console.log(deepFirstSearch(a, 'D')); // true
