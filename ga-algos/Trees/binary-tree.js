// binary tree class
// import readline from 'node:readline';
const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});



class Node {
    constructor(val) {
        this.val = val;
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
        this.size = 0
    }
    insert(v) {
        const newNode = new Node(v)
        if(!this.root) {
            this.root = newNode
            return this
        } else {
            let current = this.root

            while(true) {
                if(current.val === v) return undefined

                if(v > current.val) {
                    if(!current.right) {
                        current.right = newNode
                        return this
                    } else {
                        current = current.right
                    }
                } else if (v < current.val) {
                    if(!current.left) {
                        current.left = newNode
                        return this
                    } else {
                        current = current.left
                    }
                }

            }
        }
        
    }
}


const myTree = new BinarySearchTree()

for(let i=0; i<50; i++) {
    myTree.insert(Math.floor( Math.random() * 100 ))
}

console.log(myTree)

while(true) {
    rl.question(`Search the tree: $ `, search => {
        if( search === 'quit') {
            return 'quit'
        }
        console.log( eval(search) );
        rl.close();
    });
}
