/*

What is a binary heap?

Very similar to binary search tree, but with some different rules!

In a MaxBinaryHeap parent nodes are always larger than child nodes
In a MinBinaryHeap, parent nodes are always smaller than child nodes

MAX BINARY HEAP
- Each parent has at most two child nodes
- The value of each parent node is always greater than its child nodes
- In a Max Binary Heap the parent is greater than children, but there are no guarantees between sibling nodes
- A binary heap is as compact as possible. All the children of each node are as full as they can be
and left children are filled out first

INSERT PSEUDOCODE
- Push the value into the values property on the heap
- Bubble the value up to its correct spot:
    - Create a variable called index which is the length of the values property - 1
    - Create a variable called parent index which is the floor of (index-1)/2
    - Keep looping as long as the values elements at the parentIndex is less than the values element at the child index
        - Swap the value of the values element at the parentIndex with the value of the element property at the
        child index
        - Set the index to be parentIndex, and start over!

 */


import {swap} from '../../sorting_algorithms/swap_func.js'


class MaxBinaryHeap {
    constructor() {
        this.values = []
    }

    insert(element) {
        this.values.push(element)
        this._bubbleUp()
    }

    _bubbleUp() {
        let idx = this.values.length - 1
        const element = this.values[idx]
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2)
            let parent = this.values[parentIdx]
            if (element <= parent) break
            this.values[parentIdx] = element
            this.values[idx] = parent
            idx = parentIdx
        }
    }
}


let heap = new MaxBinaryHeap()
heap.insert(41)
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(27)
heap.insert(12)
heap.insert(55)
heap.insert(1)
heap.insert(45)
console.log(heap.values)
