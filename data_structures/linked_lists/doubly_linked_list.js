class Node{
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList{
    constructor() {
        this.head = null
        this.tail = null
        this.leangth = 0
    }

    push(val) {
        let newNode = new Node(val)

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.prev = this.tail
            this.tail.next = newNode
            this.tail = newNode
        }

        this.leangth++
        return this
    }

    pop() {
        if (this.leangth === 0) return undefined

        let deleted = this.tail

        if (this.leangth === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = deleted.prev
            this.tail.next = null
            deleted.prev = null
        }

        this.leangth--
        return deleted
    }

    shift() {
        if (this.leangth === 0) return undefined

        let deleted = this.head

        if (this.leangth === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = deleted.next
            this.head.prev = null
            deleted.next = null
        }

        this.leangth--
        return deleted
    }

    unshift(val) {
        let newNode = new Node(val)

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }

        this.leangth++
        return this
    }

    get(index) {
        if (index < 0 || index >= this.leangth) return null

        let mid = Math.floor( this.leangth / 2)
        let current
        if (index <= mid) {
            current = this.head

            for (let i = 0; i < index; i++) {
                current = current.next
            }
        } else {
            current = this.tail

            for (let i = this.leangth - 1; i > index; i--) {
                current = current.prev
            }
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
        if (index < 0 || index > this.leangth) return false
        if (index === 0) return !!this.unshift(val)
        if (index === this.leangth) return !!this.push(val)

        let newNode = new Node(val)
        let found = this.get(index - 1)
        let next = found.next

        found.next = newNode
        newNode.prev = found
        newNode.next = next
        next.prev = newNode

        this.leangth++
        return true
    }

    remove(index) {
        if (index < 0 || index >= this.leangth) return undefined
        if (index === 0) return this.shift()
        if (index === this.leangth - 1) return this.pop()

        let found = this.get(index - 1)
        let deleted = found.next
        let next = deleted.next

        found.next = next
        next.prev = found
        deleted.next = null
        deleted.prev = null

        this.leangth--
        return deleted
    }

    print() {
        let results = []
        let current = this.head
        while (current) {
            results.push(current.val)
            current = current.next
        }
        console.log(results)
    }

    printConnections() {
        let results = []
        let current = this.head

        while (current) {
            results.push({
                'val': current.val,
                'next': current.next && current.next.val,
                'prev': current.prev && current.prev.val
            })
            current = current.next
        }
        console.log(results)
    }
}

let list = new DoublyLinkedList()
list.push(10).push(20).push(30).push(40)

list.pop()
list.shift()
list.unshift(10)

console.log(list.get(2))

list.set(1, 200)
list.set(0, 100)
list.set(2, 300)

list.insert(2, 500)
list.remove(2)

list.print()
list.printConnections()
