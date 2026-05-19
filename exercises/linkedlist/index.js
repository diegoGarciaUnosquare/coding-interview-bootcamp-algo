// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let counter = 0;
        let node = this.head;

        while(node) {
            counter++;
            node = node.next;
        }
        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let node = this.head;
        let lastNode = null;

        while (node) {
            if (node.next === null) {
                lastNode = node;
                break;
            }
            node = node.next;
        }

        return lastNode;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) {
            return;
        }
        
        const firstNode = this.head;
        const secondNode = firstNode.next;
        this.head = secondNode;
    }

    removeLast() {
        let previousNode = null;
        let node = null;

        if(!this.head) {
            return;
        }

        if(!this.head.next) {
            this.head = null;
            return;
        }

        previousNode = this.head;
        node = this.head.next;

        while (node.next) {
            previousNode = node;
            node = node.next;    
        }

        previousNode.next = null;
    }

    insertLast(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
        } else {
            this.getLast().next = node;
        }

    }

    getAt(index) {
        let counter = 0;
        let node = this.head;

        while (node) {
            if (counter === index) {
                return node;
            }
            
            node = node.next;
            counter++;
        }

        return node;
    }

    removeAt(index) {
        if (!this.head) {
            return null;
        }

        if (index === 0) {
            this.head = this.head.next;
        }

        const previous = this.getAt(index - 1);
        if (!previous || !previous.next) {
            return;
        }
        const elemToRemove = this.getAt(index);
        return previous.next = elemToRemove.next;
    }

    // removeAt - my solution
    // removeAt(index) {
    //     if (!this.head) {
    //         return null;
    //     }

    //     if (index === 0) {
    //         this.head = this.head.next;
    //         return;
    //     }

    //     let previousNode = this.head;
    //     let currentNode = this.head.next;
    //     let counter = 1;

    //     while (currentNode) {
    //         if (counter === index) {
    //             if (!previousNode || previousNode.Next) {
    //                 return;
    //             }

    //             previousNode.next = currentNode.next;
    //             return previousNode.next;
    //         }

    //         previousNode = currentNode;
    //         currentNode = currentNode.Next;
    //         counter++;
    //     }
    //     return;
    // }

    insertAt(data, index) {
        if(!this.head) {
            this.head = new Node(data);
            return;
        }

        if(index === 0) {
            this.head = new Node(data, this.head);
            return;
        }


        const previousNode = this.getAt(index - 1) || this.getLast();
        const newNode = new Node(data, previousNode.next);
        previousNode.next = newNode;
    }
}

module.exports = { Node, LinkedList };
