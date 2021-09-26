class Stack{

    constructor(){
        this.MAX_LEN = 30;
        this.topIndex = -1;
        this.container = [];
    }

    push(element){
        if(topIndex == this.MAX_LEN-1){
            throw new Error("Stack full");
        }

        this.topIndex += 1;
        this.container[topIndex] = element;
    }

    pop(){
        if(topIndex == -1){
            throw new Error("Stack Empty");
        }

        poppedElement = this.container[topIndex];
        this.topIndex -= 1;
        return poppedElement;
    }

    get topElement(){
        if(topIndex == -1){
            throw new Error("Stack Empty");
        }

        return this.container[topIndex];
    }
}