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

 */


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
}

let g = new WeightedGraph()

g.addVertex('A')
g.addVertex('B')
g.addVertex('C')

g.addEdge('A', 'B', 9)
g.addEdge('A', 'C', 5)
g.addEdge('B', 'C', 7)

console.log(g.adjacencyList)