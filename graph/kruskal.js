class Node {
    value = null;
    neighbors = [];

    constructor(value) {
        this.value = value;
    }

    toString() {
        return this.value + ' -> ' + this.neighbors.map(node => node.value).join(', ');
    }

}

// 创建节点
const nodeA = new Node('A');
const nodeB = new Node('B');
const nodeC = new Node('C');
const nodeD = new Node('D');
const nodeE = new Node('E');

const nodes = [nodeA, nodeB, nodeC, nodeD, nodeE];

const graphMatrix = [
    [0, 4, 8, 6, Infinity],
    [4, 0, 7, Infinity, Infinity],
    [8, 7, 0, 5, Infinity],
    [6, Infinity, 5, 0, 7],
    [Infinity, Infinity, Infinity, 7, 0]
];

function isConnect(nodeA, nodeB, visited = new Set()) {
    if (nodeA.neighbors.includes(nodeB) || nodeB.neighbors.includes(nodeA)) {
        return true;
    }
    for (const neighbor of nodeA.neighbors) {
        if (visited.has(neighbor)) {
            continue;
        }
        visited.add(neighbor);
        if (isConnect(neighbor, nodeB, visited)) {
            return true;
        }
    }
    return false;
}

// kruskal算法
function kruskal(nodes, graphMatrix) {
    let begin = null;
    let end = null;
    let minWeight = Infinity;
    for (let i = 0; i < graphMatrix.length; i++) {
        for (let j = i + 1; j < graphMatrix[i].length; j++) {
            if (i !== j && graphMatrix[i][j] < minWeight && !isConnect(nodes[i], nodes[j])) {
                minWeight = graphMatrix[i][j];
                begin = nodes[i];
                end = nodes[j];
            }
        }
    }
    if (begin && end) {
        begin.neighbors.push(end);
        end.neighbors.push(begin);
        kruskal(nodes, graphMatrix);
    }
}

kruskal(nodes, graphMatrix);
console.log(nodeA.toString());
console.log(nodeB.toString());
console.log(nodeC.toString());
console.log(nodeD.toString());
console.log(nodeE.toString());
