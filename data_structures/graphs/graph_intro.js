/*

ESSENTIAL GRAPH TERMS:
Vertex - a node
Edge - connection between nodes
Weighted/Unweighted - values assigned to distances between vertices
Directed/Undirected - directions assigned to distanced between vertices

There are 2 main ways to implement a graph:
1. ADJACENCY MATRIX
2. ADJACENCY LIST


DIFFERENCES & BIG O
|V| - number of vertices
|E| - number of edges

    OPERATION               ADJACENCY LIST              ADJACENCY MATRIX
    Add Vertex                   O(1)                       O(|V^2|)
    Add Edge                     O(1)                         O(1)
    Remove Vertex            O(|V| + |E|)                   O(|V^2|)
    Remove Edge                 O(|E|)                        O(1)
    Query                    O(|V| + |E|)                     O(1)
    Storage                  O(|V| + |E|)                   O(|V^2|)


 */