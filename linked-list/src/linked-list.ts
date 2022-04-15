import { Node } from './node'

export class LinkedList<T> {
    root: Node<T> | null;

    constructor() {
        this.root = null;
    }

    add(value: T) {
        const node = new Node<T>(value);
        if (!this.root) {
            this.root = node;
            return this;
        }

        const lastNode = this._getLastNode();
        lastNode.setNextNode(node);
        return this;
    }    

    printList() {
        let temporalNode = this.root;
        if (!temporalNode) {
            return console.log('Empty list');
        }

        console.log(temporalNode.value);
        while (temporalNode?.nextNode) {
            temporalNode = temporalNode.nextNode;
            console.log(temporalNode.value);
        }
    }

    private _getLastNode() {
        let temporalNode = this.root;
        while (temporalNode?.nextNode) {
            temporalNode = temporalNode.nextNode;
        }

        return temporalNode as Node<T>;
    }
}