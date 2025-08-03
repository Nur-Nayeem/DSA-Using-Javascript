// link_list 

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0;
    }
    isEmpty() {
        return this.size === 0
    }
    getSize() {
        return this.size
    }


    // using head only 

    // // O(1)
    // prepend(value) {
    //     const node = new Node(value)
    //     if (this.isEmpty()) {
    //         this.head = node;
    //     } else {
    //         node.next = this.head
    //         this.head = node
    //     }
    //     this.size++;
    // }

    // // O(n)
    // append(value) {
    //     const node = new Node(value)
    //     if (this.isEmpty()) {
    //         this.head = node;
    //     }
    //     else {
    //         let prev = this.head;
    //         while (prev.next) {
    //             prev = prev.next
    //         }
    //         prev.next = node;
    //     }
    //     this.size++;
    // }




    insert(value, index) {

        if (index < 0 || index > this.size) {
            return;
        }
        if (index === 0) {
            this.prepend(value)
        }
        else {
            const node = new Node(value)
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node
            this.size++;

        }
        this.size++;
    }

    removeValueOfIndex(index) {
        if (index < 0 || index >= this.size) {
            return;
        }
        let removeNode;
        if (index === 0) {
            removeNode = this.head;
            this.head = removeNode.next;
        }
        else {
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            removeNode = prev.next;
            prev.next = removeNode.next
        }
        this.size--;
    }

    remove(value) {
        if (this.isEmpty()) {
            return;
        }
        if (this.head.value === value) {
            this.head = this.head.next
            this.size--;
        }
        else {
            let prev = this.head;
            let removeNode;
            while (prev.next && prev.next.value !== value) {
                prev = prev.next;
            }
            if (prev.next) {
                removeNode = prev.next
                prev.next = removeNode.next;
                this.size--;
                return;
            }
            return;


        }
    }

    search(value) {
        if (this.isEmpty()) {
            return -1;
        }
        let i = 0;
        let curr = this.head;
        while (curr) {
            if (curr.value === value) {
                return i;
            }
            curr = curr.next;
            i++;
        }
        return -1;

    }

    reverse() {
        let prev = null
        let curr = this.head;
        while (curr) {
            let next = curr.next;
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }



    // using head tail both

    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        }
        else {
            node.next = this.head
            this.head = node
        }
        this.size++;
    }
    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        }
        else {
            this.tail.next = node;
            this.tail = node
        }
        this.size++;
    }

    removeFromFront() {
        if (this.isEmpty()) {
            return;
        }
        this.head = this.head.next;
        this.size--;
    }

    removeFromEnd() {
        if (this.isEmpty()) {
            return;
        }
        if (this.size === 1) {
            this.head = null
            this.tail = null
        }
        else {
            let prev = this.head;
            while (prev.next !== this.tail) {
                prev = prev.next
            }
            prev.next = null;
            this.tail = prev
        }
        this.size--;
    }

    print() {
        if (this.isEmpty()) {
            console.log('List is empty');
        }
        else {
            let curr = this.head;
            let listVallues = ''
            while (curr) {
                listVallues += `${curr.value} `
                curr = curr.next;
            }
            console.log(listVallues);
        }
    }
}

const list = new LinkList()
console.log(list.isEmpty());
console.log(list.getSize());

// list.prepend(34)
// list.prepend(12)
// list.prepend(25)
// list.prepend(5)
// list.append(77)

// list.insert(90, 2)

// list.removeValueOfIndex(3)
// list.remove(77)

// console.log(`the searched element position is: ${list.search(90)}`);
// list.reverse()

// list.append(88)
// list.append(34)
// list.prepend(99)
// list.prepend(101)

// list.removeFromFront()
// list.removeFromEnd()
// // console.log(list.isEmpty());
// // console.log(list.getSize());


// list.print()

//stack using link list

class LinkListStak {
    constructor() {
        this.list = new LinkList()
    }
    push(element) {
        this.list.prepend(element)
    }
    pop() {
        this.list.removeFromFront()
    }
    peek() {
        return this.list.head.value
    }
    isEmpty() {
        return this.list.isEmpty()
    }
    getSize() {
        return this.list.getSize()
    }
    print() {
        this.list.print()
    }

}


const stk2 = new LinkListStak()

// stk2.push(45)
// stk2.push(46)
// stk2.push(49)
// stk2.push(43)
// stk2.pop()

// console.log(stk2.peek());


// stk2.print()




//queue using link list

class LinkListQueue {
    constructor() {
        this.list = new LinkList()
    }
    anqueue(element) {
        this.list.append(element)
    }
    dequeue() {
        this.list.removeFromFront()
    }
    peek() {
        return this.list.head.value
    }
    isEmpty() {
        return this.list.isEmpty()
    }
    getSize() {
        return this.list.getSize()
    }
    print() {
        this.list.print()
    }

}

const que2 = new LinkListQueue()

que2.anqueue(34)
que2.anqueue(11)
que2.anqueue(32)

que2.dequeue()
console.log(que2.peek());


que2.print()