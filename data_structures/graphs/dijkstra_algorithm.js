/*

Finds the shortest path between two vertices on a graph
"What's the fastest way to get from point A to point B?"

Why is it useful?
- GPS
- Network Routing
- Biology - used to model the spread of viruses among humans
- Airline tickets
- ...

THE APPROACH
1. Every time we look to visit a new node, we pick the node with the smallest known distance to visit first
2. Once we've moved to the node we're going to visit, we look at each of its neighbors
3. For each neighboring node, we calculate the distance by summing the total edges that lead to the node
we're checking from the starting node
4. If the new distance to a node is less than the previous total, we store the new shorter distance for that node

Dijkstra's Pseudocode
- This function should accept a starting and ending vertex
- Create an object (we'll call it distances) and set each key to be every vertex in the adjacency list with
a value of infinity, except for the starting vertex which should have a value of 0
- After setting a value in the distances object, add each vertex with a priority of Infinity to the priority queue,
except the starting vertex, which should have a priority of 0 'cause that's where we begin
- Create another object called previous and set each key to be every vertex in the adjacency list with a value of null
- Start looping as long as there is anything in the priority queue
    - Dequeue a vertex from the priority queue
    - If that vertex is the same as the ending vertex - we are done!
    - Otherwise loop through each value in the adjacency list at that vertex
        - Calculate the distance to that vertex from the starting vertex
        - If the distance is less than what is currently stored in our distances object
            - Update the distances object with new lower distance
            - Update the previous object to contain that vertex
            - enqueue the vertex with the total distance from the start node

 */


// class PriorityQueue {
//     constructor() {
//         this.values = []
//     }
//
//     enqueue(val, priority) {
//         this.values.push({val, priority})
//         this._sort()
//     }
//
//     dequeue() {
//         return this.values.shift()
//     }
//
//     _sort() {
//         this.values.sort((a, b) => a.priority - b.priority)
//     }
// }


import {PriorityQueue} from '../heaps/priority_queue.js'


class WeightedGraph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }

    addEdge(v1, v2, weight) {
        this.adjacencyList[v1].push({node: v2, weight})
        this.adjacencyList[v2].push({node: v1, weight})
    }

    dijkstra(start, finish) {
        let queue = new PriorityQueue()
        let distances = {}
        let previous = {}
        let path = []
        let priority
        let smallest

        for (let vertex in this.adjacencyList) {
            priority = vertex === start ? 0 : Infinity
            distances[vertex] = priority
            queue.enqueue(vertex, priority)
            previous[vertex] = null
        }

        while (queue.values.length) {
            smallest = queue.dequeue().val
            if (smallest === finish) {
                while (previous[smallest]) {
                    path.push(smallest)
                    smallest = previous[smallest]
                }
                break
            }
            if (smallest || distances[smallest] !== Infinity) {
                for (let neighbor in this.adjacencyList[smallest]) {
                    let nextNode = this.adjacencyList[smallest][neighbor]
                    let candidate = distances[smallest] + nextNode.weight
                    let nextNeighbor = nextNode.node
                    if (candidate < distances[nextNeighbor]) {
                        distances[nextNeighbor] = candidate
                        previous[nextNeighbor] = smallest
                        queue.enqueue(nextNeighbor, candidate)
                    }
                }
            }
        }
        return path.concat(smallest).reverse()
    }
}

let q = new PriorityQueue()
q.enqueue('B', 3)
q.enqueue('C', 5)
q.enqueue('D', 2)
q.enqueue('Q', 20)
console.log(q.values)

let g = new WeightedGraph()

g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')

g.addEdge('A', 'B', 4)
g.addEdge('A', 'C', 2)
g.addEdge('B', 'E', 3)
g.addEdge('C', 'D', 2)
g.addEdge('C', 'F', 4)
g.addEdge('D', 'E', 3)
g.addEdge('D', 'F', 1)
g.addEdge('E', 'F', 1)

console.log(g.adjacencyList)

console.log(g.dijkstra('A', 'E'))