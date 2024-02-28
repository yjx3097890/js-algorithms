import {iteratorList} from "./iterator.js";

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

function reverse(head) {
// 链表的反转
    let prev = null;
    let curr = head;
    while(curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}
reverse(node1)
iteratorList(node5)
