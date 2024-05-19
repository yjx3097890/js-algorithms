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
    if (restList.length === 0) {
        return;
    }
    if (addedList.length === 0) {
        addedList.push(restList.shift());
        prim(nodes, graphMatrix, addedList, restList);
        return;
    }
    let minWeight = Infinity;
    let minIndex = -1;
    let addedIndex = -1;
    for (const restNode of restList) {
        const restIndex = nodes.indexOf(restNode);
        for (const addedNode of addedList) {
            const nodeIndex = nodes.indexOf(addedNode);
            const weight = graphMatrix[restIndex][nodeIndex];
            if (weight < minWeight) {
                minWeight = weight;
                minIndex = restIndex;
                addedIndex = nodeIndex;
            }
        }
    }
    if (minIndex !== -1) {
        const minNode = nodes[minIndex];
        const node = nodes[addedIndex];
        node.neighbors.push(minNode);
        minNode.neighbors.push(node);
        addedList.push(minNode);
        restList = restList.filter(node => node !== minNode);
    }
    prim(nodes, graphMatrix, addedList, restList);
}

prim(nodes, graphMatrix);
console.log(nodeA.toString());
console.log(nodeB.toString());
console.log(nodeC.toString());
console.log(nodeD.toString());
console.log(nodeE.toString());
