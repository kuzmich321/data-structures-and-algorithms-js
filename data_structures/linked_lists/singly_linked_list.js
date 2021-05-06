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

    unshift(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }

        this.length++
        return this
    }

    get(index) {
        if (index < 0 || index >= this.length) return null
        let count = 0
        let current = this.head
        while (count < index) {
            current = current.next
            count++
        }
        return current
    }

    set(index, val) {
        let found = this.get(index)
        if (found) {
            found.val = val
            return true
        }
        return false
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false
        if (index === this.length) return !!this.push(val)
        if (index === 0) return !!this.unshift(val)

        let newNode = new Node(val)
        let prev = this.get(index - 1)
        newNode.next = prev.next.next
        prev.next = newNode
        this.length++
        return true
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined
        if (index === this.length - 1) return this.pop()
        if (index === 0) return this.shift()

        let prev = this.get(index - 1)
        let deleted = prev.next
        prev.next = deleted.next
        this.length--
        return deleted
    }

    reverse() {
        let node = this.head
        this.head = this.tail
        this.tail = node
        let next, prev
        for (let i = 0; i < this.length; i++) {
            next = node.next
            node.next = prev
            prev = node
            node = next
        }
        return this
    }

    print() {
        if (!this.head) return undefined

        let results = []
        let current = this.head

        while (current) {
            results.push(current.val)
            current = current.next
        }
        console.log(results)
    }
}

let list = new SinglyLinkedList()

list.push(1).push(2).push(3)
list.pop()
list.shift()
list.unshift(10)
list.push(500)
list.get(2)
list.set(1, 20)
list.insert(0, 400)
list.remove(2)
list.unshift(30)

list.print()
list.reverse()
list.print()
