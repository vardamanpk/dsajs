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
    find(value){
        let current = this.root;
        while(true){
            if(current == null){
                return false;
            }
            if(value < current.value)
                current = current.left;
            else if(value > current.value)
                current = current.right;
            else
                return true;
        }
    }
}

/*
var bst = new BST();
bst.insert(10);
bst.insert(7);
bst.insert(13);
bst.insert(9);
bst.insert(5);
bst.insert(11);
bst.find(9);
bst.find(10);
bst.find(8);
*/
