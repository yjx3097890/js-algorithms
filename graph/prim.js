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

// 普利姆算法
function prim(nodes, graphMatrix, addedList = [], restList = [...nodes]) {

}

prim(nodes, graphMatrix);
console.log(nodeA.toString());
console.log(nodeB.toString());
console.log(nodeC.toString());
console.log(nodeD.toString());
console.log(nodeE.toString());


