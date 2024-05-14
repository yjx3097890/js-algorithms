import {preorder} from "./preorderTraversal.js";

const ino = ['D', 'B', 'E', 'A', 'F', 'C', 'G'];
const post = ['D', 'E', 'B', 'F', 'G', 'C', 'A'];

class Node {
    value = null;
    left = null;
    right = null;

    constructor(value) {
        this.value = value;
    }
}

function postInToPre(post, ino) {
    if (post == null || ino == null || post.length === 0 || ino.length === 0 || post.length !== ino.length) return null;
    const root = new Node(post[post.length - 1]);
    const index = ino.indexOf(root.value);
    const postLeft = post.slice(0, index);
    const postRight = post.slice(index, post.length - 1);
    const inoLeft = ino.slice(0, index);
    const inoRight = ino.slice(index + 1, ino.length);
    root.left = postInToPre(postLeft, inoLeft);
    root.right = postInToPre(postRight, inoRight);
    return root;
}

const root = postInToPre(post, ino);

preorder(root)
