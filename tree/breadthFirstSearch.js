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

function breadthFirstSearch(rootList, target) {
    if (rootList.length === 0) return false;
    const nextList = [];
    for (let i = 0; i < rootList.length; i++) {
        if (rootList[i].value === target) return true;
        if (rootList[i].left) nextList.push(rootList[i].left);
        if (rootList[i].right) nextList.push(rootList[i].right);
    }
    return breadthFirstSearch(nextList, target);
}

console.log(breadthFirstSearch([a], 'D')); // true
