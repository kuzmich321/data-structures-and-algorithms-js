/*

GRAPH TRAVERSAL USES
- Peer to peer networking
- Web crawlers
- Finding "closest" matches/recommendations
- Shortest path problems
    - GPS Navigation
    - Solving mazes
    - AI (shortest path to win the game)

 */


class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2)
        this.adjacencyList[v2].push(v1)
    }

    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2)
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1)
    }

    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex, adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }

    DFSRecursive(start) {
        let visited = {}
        let result = []
        const dfs = vertex => {
            if (!vertex) return null
            visited[vertex] = true
            result.push(vertex)
            this.adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    return dfs(neighbor)
                }
            })
        }
        dfs(start)

        return result
    }

    DFSIterative(start) {
        let stack = [start]
        let result = []
        let visited = {}
        let currentVertex

        visited[start] = true

        while (stack.length) {
            currentVertex = stack.pop()
            result.push(currentVertex)
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true
                    stack.push(neighbor)
                }
            })
        }

        return result
    }
}


let g = new Graph()
g.addVertex('Dallas')
g.addVertex('Tokyo')
g.addVertex('Aspen')
console.log(g.adjacencyList)

g.addEdge('Dallas', 'Tokyo')
g.addEdge('Dallas', 'Aspen')
console.log(g.adjacencyList)

g.removeEdge('Dallas', 'Tokyo')
console.log(g.adjacencyList)

g.removeEdge('Dallas', 'Aspen')
console.log(g.adjacencyList)

console.log('-----------------------------')

g.addVertex('Los Angeles')
g.addVertex('Hong Kong')
g.addEdge('Dallas', 'Tokyo')
g.addEdge('Dallas', 'Aspen')
g.addEdge('Hong Kong', 'Tokyo')
g.addEdge('Hong Kong', 'Dallas')
g.addEdge('Los Angeles', 'Hong Kong')
g.addEdge('Los Angeles', 'Aspen')
console.log(g.adjacencyList)

g.removeVertex('Hong Kong')
console.log(g.adjacencyList)

g.removeVertex('Aspen')
console.log(g.adjacencyList)
console.log('-----------------------------')

let gTraversal = new Graph()
gTraversal.addVertex('A')
gTraversal.addVertex('B')
gTraversal.addVertex('C')
gTraversal.addVertex('D')
gTraversal.addVertex('E')
gTraversal.addVertex('F')

gTraversal.addEdge('A', 'B')
gTraversal.addEdge('A', 'C')
gTraversal.addEdge('B', 'D')
gTraversal.addEdge('C', 'E')
gTraversal.addEdge('D', 'E')
gTraversal.addEdge('D', 'F')
gTraversal.addEdge('E', 'F')

console.log(gTraversal.DFSRecursive('A'))
console.log(gTraversal.DFSIterative('A'))
