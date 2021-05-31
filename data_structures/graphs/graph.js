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
