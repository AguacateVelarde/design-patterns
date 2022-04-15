import { LinkedList } from "./linked-list";

function main() {

    console.log('--------- Number list ---------');

    const numberList = new LinkedList<number>();
    numberList.add(2)
        .add(4)
        .add(12)
        .add(43)
        .add(9)
        .add(98)
        .add(4665)
        .printList();

    console.log('--------- String list ---------');

    const stringList = new LinkedList<string>();
    stringList.add('hello')
        .add('world')
        .printList();
}


main()