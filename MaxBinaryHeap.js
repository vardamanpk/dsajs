class MaxBinaryHeap{
    constructor(){
        this.values=[];
    }
    parent(i){
        return Math.floor((i-1)/2)
    }
    insert(value){
        this.values.push(value);
        let i = this.values.length-1;
        let parentIndex = this.parent(i);
        let temp;
        while(i>0 && this.values[parentIndex]<this.values[i]){
            temp = this.values[parentIndex];
            this.values[parentIndex] = this.values[i];
            this.values[i] = temp;
            i = this.parent(i);
            parentIndex = this.parent(i);
        }
        return this.values;
    }
}

/* 
var maxHeap = new MaxBinaryHeap();
maxHeap.insert(10);
maxHeap.insert(30);
maxHeap.insert(20);
maxHeap.insert(35);
maxHeap.insert(50);

*/
