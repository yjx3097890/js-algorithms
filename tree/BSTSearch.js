class Node {
    value = null;
    left = null;
    right = null;

    constructor(value) {
        this.value = value;
    }
}

const arr = new Array(100000).fill(0).map((_) => Math.round(Math.random() * 100000));

function addNode(root, value) {
    if (root === null) {
        return new Node(value);
    }

    if (value < root.value) {
        root.left = addNode(root.left, value);
    } else {
        root.right = addNode(root.right, value);
    }

    return root;
}

function makeBinarySearchTree(arr) {
    let root = null;

    for (let i = 0; i < arr.length; i++) {
        root = addNode(root, arr[i]);
    }

    return root;
}

const a = makeBinarySearchTree(arr);

function BSTSearch(root, target) {
    if (root === null) {
        return false;
    }

    if (root.value === target) {
        return true;
    }

    if (target < root.value) {
        return BSTSearch(root.left, target);
    } else {
        return BSTSearch(root.right, target);
    }
}

console.log(BSTSearch(a, 1000));
