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

}

console.log(deepSearch(nodeA, 'E'))
