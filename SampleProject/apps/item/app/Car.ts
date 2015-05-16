module MyModule {
    export var foo = "foo";
    export function bar() {
        return "bar";
    }
}

interface ICar {
    drive: () => void;
    toString: () => string;
    color: string;
};

class Car {
    constructor(private model,
        private year,
        private miles) {

    }

    public toString() {
        return this.model + " has done " + this.miles + " miles";
    }
}

// We can create new instances of the car
var civic = new Car("Honda Civic", 2009, 20000);
var mondeo = new Car("Ford Mondeo", 2010, 5000);

// and then open our browser console to view the
// output of the toString() method being called on
// these objects
console.log(civic.toString());
console.log(mondeo.toString());