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

class Queue {
    constructor(){
        this.q1 = new Stack()
        this.q2 = new Stack()
    }

    add(e){
        this.q1.push(e)
    }

    remove(){
        while(this.q1.peek()){
            this.q2.push(this.q1.pop())
        }
        let r = this.q2.pop()
        while(this.q2.peek()){
            this.q1.push(this.q2.pop())
        }
        return r
    }

    peek(){
        while(this.q1.peek()){
            this.q2.push(this.q1.pop())
        }
        let r = this.q2.peek()
        while(this.q2.peek()){
            this.q1.push(this.q2.pop())
        }
        return r
    }
}

module.exports = Queue;
