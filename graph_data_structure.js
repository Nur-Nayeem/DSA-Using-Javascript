// // A \
// // |  \
// // |   B----D
// // C /   
// const adjucency_graph = [
//     [0, 1, 1, 0],
//     [1, 0, 1, 1],
//     [1, 1, 0, 0],
//     [0, 1, 0, 0]
// ]

// const adjucency_list = {
//     'A': ['B', 'C'],
//     'B': ['A', 'C', 'D'],
//     'C': ['A', 'B'],
//     'D': ['B']
// }


class Graph {
    constructor() {
        this.adjucency_list = {}
    }
    addVartex(vartex) {
        if (!this.adjucency_list[vartex]) {
            this.adjucency_list[vartex] = new Set()
        }
    }
    addEdgs(vartex1, vartex2) {
        if (!this.adjucency_list[vartex1]) {
            this.addVartex(vartex1)
        }
        if (!this.adjucency_list[vartex2]) {
            this.addVartex(vartex2)
        }
        this.adjucency_list[vartex1].add(vartex2)
        this.adjucency_list[vartex2].add(vartex1)
    }

    hasEdgs(vartex1, vartex2) {
        return (
            this.adjucency_list[vartex1].has(vartex2) &&
            this.adjucency_list[vartex2].has(vartex1)
        )
    }
    deleteVartex(vartex) {
        if (!this.adjucency_list[vartex]) {
            return
        }
        for (let adjucency_Vartex in this.adjucency_list) {
            this.deleteEdgs(vartex, adjucency_Vartex)
        }
        delete this.adjucency_list[vartex]
    }
    deleteEdgs(vartex1, vartex2) {
        this.adjucency_list[vartex1].delete(vartex2)
        this.adjucency_list[vartex2].delete(vartex1)
    }

    display() {
        for (let vartex in this.adjucency_list) {
            console.log(vartex + "-> " + [...this.adjucency_list[vartex]]);
        }
    }
}

const graph = new Graph()

graph.addVartex('A')
graph.addVartex('B')
graph.addVartex('C')
graph.addVartex('D')

graph.addEdgs('A', 'B')
graph.addEdgs('A', 'C')
graph.addEdgs('B', 'C')
graph.addEdgs('B', 'D')

graph.deleteEdgs('A', 'C')

graph.deleteVartex('C')

graph.display()




console.log(graph.hasEdgs('A', 'C'));
