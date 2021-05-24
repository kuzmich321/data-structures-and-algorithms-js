/*

PRIORITY QUEUE PSEUDOCODE:
- Write a Min Binary Heap - lower number means higher priority
- Each Node has a val and a priority. Use the priority to build the heap
- Enqueue method accepts a value and priority, makes a new node. and puts it in the right spot
- Dequeue method removed root element, returns it, and rearranges heap using priority

 */


class Node {
    constructor(val, priority) {
        this.val = val
        this.priority = priority
        // this.insertTime = Date.now()
    }
}


class PriorityQueue {
    constructor() {
        this.values = []
    }

    // O (log(N)) time | O(1) space
    enqueue(val, priority) {
        let newNode = new Node(val, priority)
        this.values.push(newNode)
        this._bubbleUp()
    }

    _bubbleUp() {
        let idx = this.values.length - 1
        const node = this.values[idx]
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2)
            let parent = this.values[parentIdx]
            if (node.priority >= parent.priority) break
            this.values[parentIdx] = node
            this.values[idx] = parent
            idx = parentIdx
        }
    }

    // O (log(N)) time | O(1) space
    dequeue() {
        const min = this.values[0]
        const end = this.values.pop()

        if (this.values.length > 0) {
            this.values[0] = end
            this._sinkDown()
        }

        return min
    }

    _sinkDown() {
        let idx = 0
        const length = this.values.length
        const element = this.values[0]
        while (true) {
            let leftChildIdx = 2 * idx + 1
            let rightChildIdx = 2 * idx + 2
            let left, right
            let swap = null

            if (leftChildIdx < length) {
                left = this.values[leftChildIdx]
                swap = left.priority < element.priority ? leftChildIdx : null
            }

            if (rightChildIdx < length) {
                right = this.values[rightChildIdx]
                if ((!swap && right.priority < element.priority) ||
                    (swap && right.priority < left.priority)) {
                    swap = rightChildIdx
                }
            }

            if (!swap) break
            this.values[idx] = this.values[swap]
            this.values[swap] = element
            idx = swap
        }
    }
}


let ER = new PriorityQueue()
ER.enqueue('common cold', 5)
ER.enqueue('gunshot wound', 1)
ER.enqueue('gunshot wound 2', 1)
ER.enqueue('high fever', 4)
ER.enqueue('broken arm', 2)
ER.enqueue('glass in foot', 3)

console.log(ER.values)
ER.dequeue()
console.log(ER.values)
ER.dequeue()
console.log(ER.values)
ER.dequeue()
console.log(ER.values)
