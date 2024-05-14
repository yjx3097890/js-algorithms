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

const A = new Node('A');
const B = new Node('B');
const C = new Node('C');
const D = new Node('D');
const E = new Node('E');
const F = new Node('F');
const G = new Node('G');

A.left = B;
A.right = C;
B.left = D;
B.right = E;
C.left = F;
C.right = G;

// 左右子树可互换
function compareTree2(root1, root2) {
}
