// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

// course solution
class Queue {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  add(record) {
    this.first.push(record);
  }

  remove() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const record = this.second.pop();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return record;
  }

  peek() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const record = this.second.peek();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return record;
  }
}

// My solution
// class Queue {
//     constructor() {
//         this.stackOrderedAsQueue = new Stack();
//         this.auxStack = new Stack();
//     }

//     add(record) {
//         this.auxStack.push(record);
//     }

//     remove() {
//         this._convertStackToQueue();
//         const removedElem = this.stackOrderedAsQueue.pop();
//         this._restoreStack();

//         return removedElem;
//     }

//     peek() {
//         this._convertStackToQueue();
//         const peekElem = this.stackOrderedAsQueue.peek();
//         this._restoreStack();

//         return peekElem;
//     }
    
//     _convertStackToQueue() {
//         while(this.auxStack.peek()) {
//             this.stackOrderedAsQueue.push(this.auxStack.pop());
//         }
//     }

//     _restoreStack() {
//         while(this.stackOrderedAsQueue.peek()) {
//             this.auxStack.push(this.stackOrderedAsQueue.pop());
//         }
//     }
// }

module.exports = Queue;
