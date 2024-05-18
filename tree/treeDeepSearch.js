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

function deepSearch(root, target) {
    if (root === null) return null;
    if (root.value === target) return root;
    for (const node of root.children) {
        const result = deepSearch(node, target);
        if (result) {
            return result;
        }
    }
}

console.log(deepSearch(a, 'e'))
