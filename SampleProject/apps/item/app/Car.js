var MyModule;
(function (MyModule) {
    MyModule.foo = "foo";
    function bar() {
        return "bar";
    }
    MyModule.bar = bar;
})(MyModule || (MyModule = {}));

;

var Car = (function () {
    function Car(model, year, miles) {
        this.model = model;
        this.year = year;
        this.miles = miles;
    }
    Car.prototype.toString = function () {
        return this.model + " has done " + this.miles + " miles";
    };
    return Car;
})();

// We can create new instances of the car
var civic = new Car("Honda Civic", 2009, 20000);
var mondeo = new Car("Ford Mondeo", 2010, 5000);

// and then open our browser console to view the
// output of the toString() method being called on
// these objects
console.log(civic.toString());
console.log(mondeo.toString());
//# sourceMappingURL=Car.js.map
