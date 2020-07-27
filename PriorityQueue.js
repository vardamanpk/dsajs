class PriorityQueue{
    constructor(){
        this.values = [];
    }
    enqueue(node){
        this.values.push(node);
        return this.bubbleUp(node);
    }
    bubbleUp(node){
        let index = this.values.length - 1 ;
        let parentIndex;
        while(true){
            
            if(index<1) return this.values;

            parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];
            
            if(parent.priority < node.priority) return this.values;

            this.values[index] = parent;
            this.values[parentIndex] = node;
            index = parentIndex;
            
        }
    }
    dequeue(){
        const max = this.values[0];
        const node = this.values.pop();
        if(!this.values.length){
            this.values[0] = node;
        }
        this.bubbleDown(node);
        return max;
    }
    bubbleDown(node){
        let current = null;
        let swapIndex;
        const len = this.values.length;
        let i = 0;
        while(true){
            let leftChildIndex = i * 2 + 1;
            let rightChildIndex = i * 2 + 2;
            if(leftChildIndex<len){
                let leftChild = this.values[leftChildIndex];
                if(leftChild.priority < node.priority){
                    current = leftChild;
                    swapIndex = leftChildIndex;
                }
            }
            if(rightChildIndex < len){
                let rightChild = this.values[rightChildIndex];
                if(rightChild.priority < node.priority && current && rightChild.priority < current.priority){
                    current = rightChild;
                    swapIndex = rightChildIndex;
                }
            }
            if(!swapIndex) break;

            this.values[i] = this.values[swapIndex];
            this.values[swapIndex] = node;
            i = swapIndex;
        }
    }
}

class Node{
    constructor(value, priority){
        this.value = value;
        this.priority = priority;
    }
}


/*
var priorityQueue = new PriorityQueue();
priorityQueue.enqueue(new Node(10, 5));
priorityQueue.enqueue(new Node(15, 0));
priorityQueue.enqueue(new Node(20, 1));
priorityQueue.enqueue(new Node(12, 3));
priorityQueue.enqueue(new Node(18, 2));
priorityQueue.enqueue(new Node(20, 5));
priorityQueue.enqueue(new Node(16, 0));
priorityQueue.enqueue(new Node(21, 1));
priorityQueue.enqueue(new Node(13, 3));
priorityQueue.enqueue(new Node(19, 2));
*/
