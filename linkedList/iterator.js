class Node {
    value=null;
    next=null;

    constructor(value) {
        this.value = value;
    }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

 export function iteratorList(head) {
    // 循环遍历链表
    let node = head;
    while (node) {
        console.log(node);
        node = node.next;
    }
    return node;

}
// iteratorList(node1)
function iteratorList2(head) {
    // 递归遍历链表
    if (head) {
        iteratorList2(head.next);
    }
    return head;

}
iteratorList(node1)