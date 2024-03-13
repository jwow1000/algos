class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
  // In JavaScript, the thing called *this* is the object that "owns" the code. The value of *this* , when used in an object, is the object itself. In a constructor function this does not have a value. It is a substitute for the new object.
}

// let first = new Node("hi")
// let second = first.next = new Node("how are you");

// console.log(first.value);

class SinglyLinkedList{
  constructor() {
    // We have to define a pointer to the head, tail and set the length of the singly linked list starting at 0
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // define a push() that accept a parameter called value. Create a new node using the value passed to the function. If there is no head property on the list, set the head and tail to be newly created node. Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node. Increment the length by one.
  push(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = this.head
    } else {
      this.tail.next = node;
      this.tail = node
    }
    this.length++
    return this
  }

  //Define a method pop() that doesn't take any aguments. If there are no nodes in the list, return undefined. Loop through the list until you reach the tail. Set the next property of the 2nd to last node to be null. Set the tail to be the 2nd to last node. Decrement the length of the list by 1. Return the value of the removed node. 
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current
  }

  //If there are not nodes, return undefined. Store he current head property in a variable. Set the head property to be the current head's next property. Decrement the length by 1. Return the value of the removed node.
  shift() {
    if (!this.head) return undefined;
    let current = this.head;
    this.head = current.next
    this.length--
    if (!this.length) {
      this.tail = null;
    }
    return current
  } 

  // Create a method unshift() that accepts an argument *value*. Create a new node using the the value passed to the function. If there is no head property on the list, set the head and tail to be the newly created node. Otherwise set the newly created node's next property on the list. Set the head propery on the list to be that newly created node. Increment the length by 1. Return the linked list.
  unshift(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node
    } 
    node.next = this.head;
    this.head = node;
    this.length++;
    return this
  }

  //Create a get() method that accepts one argument *index*. If this argument is less than zero or greater or equal to the length of the list, return null. Loop through the list untill reach the index and return the node at that specific index.
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let count = 0;
    let current = this.head;
    while (count !== index) {
      current = current.next
      count++
    }
    return current
  }

  //Use get() to find the specific node. and update the value passed in. If the node is not found, return false. If the node is found, set the value of tat node to be the value passed to the function and return true. 
  update(index,value) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = value;
      return found;
    }
    return false;
  }

  // If the index is less than zero or greater than the length, return false. If the index is the same as the length push a new node to the end of the list. If the index is 0, unshift a new node to the start of the list. Otherwise, using the get method access the node at the index -1. Set the next property on that node to be the new node.
  insert(index, value) {
    if (index < 0 || !this.head) return false 
    if (index === this.length) {
      this.push(value);
      return true
    }
    if (index === 0) {
      this.unshift(value);
      return true
    } 
    let newNode = new Node(value);
    let prev = this.get(index - 1);
    let temp = prev.next
    prev.next = newNode;
    newNode.next = temp;
    this.length++
    return true;
  }

  //Remove 
  // If the index is less than zero or greater than the length return undefined. If the index is the same as the length-1, pop. If the index is 0, shift. Otherwise, usig the get method , access the node at the index-1. Set the next property on that node to be the next of the next node. 
  remove(index) {
    if (index < 0 || !this.head) return undefined; 
    if (index === this.length-1) {
      return this.pop(value);
     
    }
    if (index === 0) {
      return this.shift(value);
    } 
    let previousNode = this.get(index - 1);
    let removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }

  // find by val
  findByVal(val) {
    let compare = this.head;
    for(let i=0; i<this.length; i++) {
      
      if(compare.value === val) {
        return compare
      } 
      
      if(!compare.next) {
        
        return null;
      } else {
        compare = compare.next;
       
      }
    }
  }

  reverse() {

  }
}

export default SinglyLinkedList;

/* let list = new SinglyLinkedList()
list.push(99)
list.push(45)
list.push(89)

// list.pop()

// list.shift()
// list.unshift(2)
// let h = list.get(1);
console.log(list);
// console.log(h) */
