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
        this.container[topIndex] = element;
    }

    pop() {
        if (this.topIndex == -1) {
            throw new Error("Stack Empty");
        }

        poppedElement = this.container[topIndex];
        this.topIndex -= 1;
        return poppedElement;
    }

    get topElement() {
        if (this.topIndex == -1) {
            throw new Error("Stack Empty");
        }

        return this.container[topIndex];
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
stack.pop();
console.log("All elements in the array: ",+ allElements);
console.log("Topmost element in the array: ",+ topElement);