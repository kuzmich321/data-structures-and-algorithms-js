/*

Two main ways of traversing:
- Breadth-first Search (BFS)
- Depth-first Search (DFS)

BFS:
- Create a queue (this can be an array) and a variable to store the values of nodes visited
- Place the root node in the queue
- Loop as long as there is anything in the queue
    - Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
    - If there is a LEFT property on the node dequeued - add it to the queue
    - If there is a RIGHT property on the node dequeued - add it to the queue
- Return the variable that stores the values

 */


import {BST} from './bst.js'


class BFS extends BST {
    BFS() {
        let data = []
        let queue = []
        let node = this.root
        queue.push(node)

        while (queue.length) {
            node = queue.shift()
            data.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        return data
    }
}


let tree = new BFS()
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)
console.log(tree.BFS())


