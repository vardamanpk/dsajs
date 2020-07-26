class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(V){
        if(!this.adjacencyList[V])
            this.adjacencyList[V] = [];
    }
    addEdge(v1, v2){
        if(!this.adjacencyList[v1])
            this.adjacencyList[v1] = [];
        if(!this.adjacencyList[v2])
            this.adjacencyList[v2] = [];
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(v1, v2){
        this.adjacencyList[v1] = this.adjacencyList[v1] && this.adjacencyList[v1].filter((currentVertex) => currentVertex!==v2) || [];
        this.adjacencyList[v2] = this.adjacencyList[v2] && this.adjacencyList[v2].filter((currentVertex) => currentVertex!==v1) || [];
    }
    
    removeVertex(V){
        this.adjacencyList[V].forEach((v) => {
            this.removeEdge(V, v);
        })
        delete this.adjacencyList[V];

    }
    buildGraph(){
        this.addVertex('A')
        this.addVertex('B')
        this.addVertex('C')
        this.addVertex('D')
        this.addVertex('E')
        this.addVertex('F')
        this.addEdge('A','B')
        this.addEdge('A','C')
        this.addEdge('B','D')
        this.addEdge('C','E')
        this.addEdge('D','E')
        this.addEdge('D','F')
        this.addEdge('F','E')
    }
    breadFirst(start){
        const visited = {};
        const result = [];
        const queue = [start];
        visited[start] = true;
        let current;
        while(queue.length){
            current = queue.shift();
            result.push(current);
            this.adjacencyList[current].forEach((neighbor) => {
                if(!visited[neighbor]){
                    queue.push(neighbor);
                    visited[neighbor] = true;
                }
                    
            })
        }
        return result;
    }

    print(){
        console.log(this.adjacencyList);
    }
}
