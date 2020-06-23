/*
Create a function newStack, that when called returns a stack object with three methods: push, pop, and printStack. push takes a value and inserts it at the end of the stack. pop removes the last element from the stack. printStack logs each remaining element of the stack on its own line.

Internally, use an array to implement the stack. Make sure that the array is not accessible from outside the methods.
*/

function newStack() {
  let arr = [];

  return {
    push(val) {
      arr.push(val);
    },

    pop() {
      arr.pop();
    },

    printStack() {
      arr.forEach(val => console.log(val));
    }
  }
}

let test = new newStack();
console.log(test);

test.push(5);
test.push(20);
test.push(12);

test.pop();

console.log(test.printStack())

console.test.arr;