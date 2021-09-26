class Stack {

    constructor() {
        this.MAX_LEN = 30;
        this.topIndex = -1;
        this.container = [];
    }

    push(element) {
        if (this.topIndex == this.MAX_LEN - 1) {
            throw new Error("Stack full");
        }

        this.topIndex += 1;
        this.container[this.topIndex] = element;
    }

    pop() {
        if (this.topIndex == -1) {
            throw new Error("Stack Empty");
        }

        let poppedElement = this.container[this.topIndex];
        this.topIndex -= 1;
        return poppedElement;
    }

    get topElement() {
        if (this.topIndex == -1) {
            throw new Error("Stack Empty");
        }

        return this.container[this.topIndex];
    }
    get allElements() {
        if (this.topIndex == -1) {
            throw new Error("Stack Empty");
        }

        return [...this.container];

    }
}

let stack = new Stack();

stack.push(10);
stack.push(57);
stack.push(60);
stack.push(3);
stack.push(7);

console.log(`Elements after being added to the array: ${this.allElements}`);

stack.pop();
console.log(`Elements after popping the last element: ${this.allElements}`);

console.log(`All elements in the array: ${this.allElements}`);
console.log(`Topmost element in the array: ${this.topElement}`);