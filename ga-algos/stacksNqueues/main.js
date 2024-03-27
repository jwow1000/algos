// define stack and node class

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    unshift(v) {
      const newNode = new Node(v)
      if (!this.first) {
        this.first = newNode;
        this.last = newNode;
      } else {
        let temp = this.first;
        this.first = newNode;
        this.first.next = temp;
      }
      
      this.size++;
      return this.size;
    }

    shift() {
        if(!this.first) return null;

        let temp = this.first;

        if (this.size === 1 ) {
            this.last = null;
        }
        this.first = this.first.next;
        temp.next = null;
        this.size--;

        return temp.value;

    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// define the stack
pancakes = new Stack();


for(let i=0; i<100; i++ ) {
    pancakes.unshift(`pancake${i}`);
}
for (item in pancakes) {
    console.log(pancakes[item]);
}


for(let i=0; i<100; i++ ) {
    pancakes.shift();
}


console.log(pancakes)




