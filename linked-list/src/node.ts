export class Node<T> {
    value: T;
    nextNode: Node<T> | null = null;

    constructor(value: T) {
        this.value = value
    }

    setValue(value: T){
        this.value = value;
    }

    setNextNode(nextNode: Node<T>) {
        this.nextNode = nextNode;
    }

}