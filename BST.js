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
    contains(value){
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
    BFSTraversal(){
        const result = [];
        const queue = [];
        if(this.root == null)
            return false;
        queue.push(this.root);
        let current;
        while(queue.length > 0){
            current = queue.shift();
            result.push(current.value);
            if(current.left !=null)
                queue.push(current.left);
            if(current.right !=null)
                queue.push(current.right);
        }
        return result;
    }
    DFSPreOrder(){
        const result = [];
        function DFSPreOrderHelper(node){
            if(node == null)
                return;
            result.push(node.value);
            DFSPreOrderHelper(node.left);
            DFSPreOrderHelper(node.right);
        }
        DFSPreOrderHelper(this.root);
        return result;
    }
    DFSPostOrder(){
        const result = [];
        function DFSPostOrderHelper(node){
            if(node == null)
                return;
            DFSPostOrderHelper(node.left);
            DFSPostOrderHelper(node.right);
            result.push(node.value);
        }
        DFSPostOrderHelper(this.root);
        return result;
    }
        DFSInOrder(){
        const result = [];
        function DFSInOrderHelper(node){
            if(node == null)
                return;
            DFSInOrderHelper(node.left);
            result.push(node.value);
            DFSInOrderHelper(node.right);
            
        }
        DFSInOrderHelper(this.root);
        return result;
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
bst.contains(9);
bst.contains(10);
bst.contains(8);
bst.BFSTraversal();
bst.DFSPreOrder();
*/
