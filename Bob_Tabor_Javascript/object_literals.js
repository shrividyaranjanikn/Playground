let bike = {
    make: 'R15',
    model: '58IJ',
    year: 2011,
    getPrice: function(){
        console.log('15000');
    },
    printDescription: function(){
        console.log(this.make + ' ' + this.model);
    }
}

bike.getPrice();
bike.printDescription();
console.log(bike.make, bike.year);

var a = {
    myProperty : {
        b: 'hi'
    }
};

console.log(a.myProperty.b);

var c = {
    myArray : [
        {d : 'Hello'}, {e : 'my'}, {f: 'friend'}
    ]
};
console.log(c.myArray);
console.log(c.myArray);

