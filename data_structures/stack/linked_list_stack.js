class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}


class Stack {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    // to the beginning
    push(val) {
        let newNode = new Node(val)
        if (!this.first) {
            this.first = newNode
            this.last = newNode
        } else {
            newNode.next = this.first
            this.first = newNode
        }

        return ++this.size
    }

    // from the beginning
    pop() {
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


let stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.pop()
console.log(stack)
