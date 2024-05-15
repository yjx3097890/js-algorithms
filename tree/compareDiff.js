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

function compareDiffTree(root1, root2, results = []) {
    if (root1 === null && root2 === null) {
        return;
    }

    if (root1 === null) {
        results.push({type: 'add', origin: null, now: root2.value});
        compareDiffTree(null, root2.left, results);
        compareDiffTree(null, root2.right, results);
        return;
    }

    if (root2 === null) {
        results.push({type: 'remove', origin: root1.value, now: null});
        compareDiffTree(root1.left, null, results);
        compareDiffTree(root1.right, null, results);
        return;
    }

    if (root1.value !== root2.value) {
        results.push({type: 'change', origin: root1.value, now: root2.value});
    }

    compareDiffTree(root1.left, root2.left, results);
    compareDiffTree(root1.right, root2.right, results);
}

// [{type: add, origin: null, now: B}, {type: remove, origin: D, now: null}, {type: change, origin: E, now: F}, {type: add, origin: null, now: G}]
const results = [];

compareDiffTree(a, A, results);

console.log(results);




