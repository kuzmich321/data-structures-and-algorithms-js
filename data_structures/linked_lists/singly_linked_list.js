/*

Lists
- Do not have indexes!
- Connected via nodes with a <next> pointer
- Random access is not allowed

Arrays
- Index in order!
- Insertion and deletion can be expensive
- Can quickly be accessed at a specific index

 */


class Node{
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList{
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        let newNode = new Node(val)

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }

        this.length++
        return this
    }

    pop() {
        if (!this.head) return undefined

        let current = this.head
        let newTail = current

        while(current.next) {
            newTail = current
            current = current.next
        }

        this.tail = newTail
        this.tail.next = null
        this.length--
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return current
    }

    shift() {
        if (!this.head) return undefined
        let current = this.head
        this.head = current.next
        this.length--
        if (this.length === 0) {
            this.tail = null
        }
        return current
    }

    print() {
        if (!this.head) return undefined

        let current = this.head

        while (current) {
            console.log(current.val)
            current = current.next
        }
    }
}

let list = new SinglyLinkedList()
list.push(1).push(2).push(3)
list.pop()
console.log(list.shift())
console.log(list.shift())
list.print()
console.log(list)
