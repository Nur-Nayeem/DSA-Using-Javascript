//// 1. set data structure 

const set1 = new Set();
set1.add(10)
set1.add(2)
// console.log(set1)

const set2 = new Set([23, 45, 2])

set2.add(55)
// console.log(set2.has(3));

set2.delete(23)
// console.log(set2);
// console.log(set2.size)
// set2.clear()
// console.log(set2);


// for (const item of set2) {
//     console.log(item);

// }



////map data structure 

const map1 = new Map()

map1.set('name', 'nayeem')
map1.set('age', 23)

// console.log(map1);

const map2 = new Map([['name', 'nayeem'], ['age', 23]])

map2.set('isMarried', false)
// console.log(map2.has('name'));
// console.log(map2.size);

map2.delete('age')
map2.clear()
for (const [key, value] of map2) {
    console.log(`${key}: ${value}`);

}

// console.log(map2);






// // stack datastructer


class Stack {
    constructor() {
        this.items = []
    }
    push(element) {
        this.items.push(element)
    }
    pop() {
        if (isEmpty()) {
            console.log('underflow');
            return
        }
        this.items.pop()
    }
    peek() {
        return this.items[this.items.length - 1]
    }
    isEmpty() {
        return this.items.length === 0
    }
    size() {
        return this.items.length
    }
}

const stk = new Stack()

// stk.push(45)
// stk.push(48)
// stk.push(43)
// stk.pop()
// console.log(stk);
// console.log(stk.peek());
// console.log(stk.size());




// ////queue data structure using array

class Queue {
    constructor() {
        this.items = []
    }
    enqueu(element) {
        this.items.push(element)
    }
    dequeue() {
        if (this.isEmpty()) {
            console.log('Queue is empty');
            return
        }
        this.items.shift()
    }
    peek() {
        if (this.isEmpty()) {
            return null
        }
        return this.items[0]
    }
    isEmpty() {
        return this.items.length === 0
    }
    size() {
        return this.items.length
    }
    print() {
        console.log(this.items.toString());

    }
}

const que = new Queue()

// que.enqueu(34)
// que.enqueu(66)
// que.enqueu(99)

// que.dequeue()

// console.log(que.peek())
// console.log(que.size())

// console.log(que.isEmpty())

// que.print()


// // previos method dequeue is consume linear time complexity O(n) for shift

// // // queue datastreucter using object

class Queue {
    constructor() {
        this.items = {}
        this.rear = 0
        this.front = 0
    }
    enqueue(element) {
        this.items[this.rear] = element
        this.rear++;
    }
    dequeu() {
        if (this.isEmpty()) {
            console.log('underflow');
            return
        }
        delete this.items[this.front]
        this.front++;
    }
    isEmpty() {
        return this.rear - this.front === 0
    }
    peek() {
        return this.items[this.front]
    }
    size() {
        return this.rear - this.front
    }
    print() {
        console.log(this.items)
    }
}

const que2 = new Queue()

// console.log(que2.isEmpty())

// que2.enqueue(45)
// que2.enqueue(98)
// que2.enqueue(33)
// que2.dequeu()
// console.log(que2.peek());
// console.log(que2.size());

// que2.print()



// // circuler queue 

class CirculeraQueue {
    constructor(capacity) {
        this.items = new Array(capacity)
        this.capacity = capacity
        this.currentLength = 0;
        this.rear = -1;
        this.front = -1;
    }
    isEmpty() {
        return this.currentLength === 0
    }
    isFull() {
        return this.currentLength === this.capacity
    }
    enqueue(element) {
        if (this.isFull()) {
            console.log('overflow');

        } else {
            this.rear = (this.rear + 1) % this.capacity
            this.items[this.rear] = element;
            this.currentLength++;
            if (this.front === -1) {
                this.front = this.rear;
            }

        }
    }
    dequeue() {
        if (this.isEmpty()) {
            console.log('underflow');
        }
        else {
            this.items[this.front] = null;
            this.front = (this.front + 1) % this.capacity
            this.currentLength--;
            if (this.isEmpty()) {
                this.front = -1;
                this.rear = -1;
            }
        }
    }
    peek() {
        if (!this.isEmpty()) {
            return this.items[this.front]
        }
        return null;
    }

    print() {
        if (this.isEmpty()) {
            console.log('sqsue is empty');

        }
        else {
            let i;
            let str = ''
            for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
                str += this.items[i] + " "
            }
            str += this.items[i];
            console.log(str);
        }
    }
}

const que3 = new CirculeraQueue(5)
// console.log(que3.isEmpty())
// console.log(que3.isFull())
// que3.enqueue(44)
// que3.enqueue(66)
// que3.enqueue(55)
// que3.dequeue()
// console.log(que3.peek());

// que3.print()

