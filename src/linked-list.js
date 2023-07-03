class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    insertAt(value, index) {
        const newNode = new Node(value);
        if (index === 1) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
        let current = this.head;
        let i = 1;
        while (i < index -1 && current) {
            current = current.next;
            i++
        }
        if (current) {
            newNode.next = current.next;
            current.next = newNode
        }
    }

    removeAt(index) {
        if (index < 0 || index >= this.length) return null;
        if (index === 0) {
            const removedNode = this.head;
            this.head = this.head.next;
            this.length--;
            return removedNode;
        }
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        const removedNode = current.next;
        current.next = current.next.next;
        this.length--;
        return removedNode;
    }
    

    at(index) {
        let current = this.head;
        let count = 0;

        while (current != null) {
            if (count == index)
                return current.value;
            count++
            current = current.next
        }
        return 0;
    }

    contains(value) {
        let current = this.head;

        while (current != null) {
            if (current.value == value) {
                return true
            }
            current = current.next
        }
        return false
    }

    find(value) {
        let current = this.head;
        let index = 0;

        while (current != null) {
            if (current.value == value) {
                return index
            }
            index++
            current = current.next
        }
        return null
    }

    pop(size) {
        this.removeAt(size - 1)
    }

    size() {
        if (!this.head) return null
        return (this.length);
    }

    printHead() {
        console.log(`Head value is ${this.head.value}`)
    }

    printTail() {
        console.log(`Tail value is ${this.tail.value}`)
    }

    printAll() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next
        }
    }

    toString() {
        let current = this.head;
        let string = "";
    
        while (current != null) {
            string = string.concat(`( ${current.value} ) -> `);
            current = current.next;
        }
        string = string.concat("null");
        console.log(string);
    }
}


export function createList() {
    const list = new LinkedList();

    list.prepend("node1");
    list.prepend("node2");
    list.prepend("node3");
    list.prepend("node4");
    console.log("Initial List:");
    list.printAll();


    list.toString()
    // console.log("New list")
    // list.printAll();
}