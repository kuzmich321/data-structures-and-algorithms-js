class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}


class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    // push to the end
    enqueue(val) {
        let newNode = new Node(val)

        if (!this.first) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }

        return ++this.size
    }

    // remove from the start
    dequeue() {
        if (!this.first) return null

        let removed = this.first

        if (this.size === 1) {
            this.last = null
        }

        this.first = this.first.next
        this.size--

        return removed.val
    }
}


let q = new Queue()

q.enqueue(1)
q.enqueue(2)
q.enqueue(3)

console.log(q)
console.log('-------------------------------')

q.dequeue()
console.log(q)
console.log('-------------------------------')

q.dequeue()
console.log(q)
