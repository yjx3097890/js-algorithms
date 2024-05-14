import {postorder} from "./postorderTraversal.js";

const pre = ['A', 'B', 'D', 'E', 'C', 'F', 'G'];
const ino = ['D', 'B', 'E', 'A', 'F', 'C', 'G'];

class Node {
    value = null;
    left = null;
    right = null;

    constructor(value) {
        this.value = value;
    }
}

function preInToPost(pre, ino) {
    if (pre == null || ino == null || pre.length === 0 || ino.length === 0 || pre.length !== ino.length) return null;
    const root = new Node(pre[0]);
    const index = ino.indexOf(root.value);
    const preLeft = pre.slice(1, 1 + index);
    const preRight = pre.slice(1 + index, pre.length);
    const inoLeft = ino.slice(0, index);
    const inoRight = ino.slice(index + 1, ino.length);
    root.left = preInToPost(preLeft, inoLeft);
    root.right = preInToPost(preRight, inoRight);
    return root;
}

const root = preInToPost(pre, ino);

postorder(root);
