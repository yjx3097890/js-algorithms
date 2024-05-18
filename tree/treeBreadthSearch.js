class Node {
    value=null;
    children = [];

    constructor(value) {
        this.value = value;
    }

    appendChild(node) {
        this.children.push(node);
    }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.appendChild(b);
a.appendChild(c);
a.appendChild(d);
b.appendChild(e);
b.appendChild(f);

function breadthSearch(rootList, target) {
    if (rootList.length === 0) return null;
    const nextRootList = [];
    for (const root of rootList) {
        if (root.value === target) return root;
        for (const node of root.children) {
            nextRootList.push(node);
        }
    }
    return breadthSearch(nextRootList, target);
}

console.log(breadthSearch([a], 'e'))
