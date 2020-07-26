class Node{
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BST{
    constructor(){
        this.root = null;
    }
    insert(value){
        const newNode = new Node(value);
        
        if(this.root == null){
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while(true){
            if(value < current.value){
                
                if(current.left == null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else if(value > current.value){
                
                if(current.right == null){
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            } else{
                return this;
            }
        }
    }
}
