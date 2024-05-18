class Node {
    value = null;
    neighbors = [];

    constructor(value) {
        this.value = value;
    }
}

// 创建节点
const nodeA = new Node('A');
const nodeB = new Node('B');
const nodeC = new Node('C');
const nodeD = new Node('D');
const nodeE = new Node('E');


// 构建邻接关系
nodeA.neighbors.push(nodeB, nodeC, nodeD);
nodeB.neighbors.push(nodeA, nodeC);
nodeC.neighbors.push(nodeA, nodeB, nodeD);
nodeD.neighbors.push(nodeA, nodeC, nodeE);
nodeE.neighbors.push(nodeD);

function deepSearch(node, target, path = []) {
    if (!node) return null;
    if (node.value === target) return node;
    if (path.includes(node)) return null;
    path.push(node);
    for (let i = 0; i < node.neighbors.length; i++) {
        const result = deepSearch(node.neighbors[i], target, path);
        if (result) {
            return result;
        }
    }
    return null;
}

console.log(deepSearch(nodeA, 'E'))
