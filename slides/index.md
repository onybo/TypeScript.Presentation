﻿- title : Using TypeScript
- description : My experiences using TypeScript to develop LOB applications
- author : Olav Nybø
- theme : sky
- transition : default

***

## TypeScript
- Tools
- Lock in?
- Type annotations 
- TypeScript and Angular
    - fat arrows, generics
 
***

## Tools
- Web Essentials
    - Split screen
- IE or Chrome developer tools - F12
- Map Files

***
## lock in?
- classes/objects
- modules/namespaces
- interfaces

---

#### TypeScript class

    [lang=js]
    class Car {
      constructor(private model,
        private year,
        private miles) {
      }

      public toString() {
        return this.model + " has done " + this.miles + " miles";
      }
    }


---

<img src="images/javascript_design_patterns.jpg" alt="Alt text">

---

#### Constructors With Prototypes

    [lang=js]
    function Car( model, year, miles ) {

      this.model = model;
      this.year = year;
      this.miles = miles;

      Car.prototype.toString = function () {
        return this.model + " has done " + this.miles + " miles";
      };
    }
    
<a style="font-size: 10px;" href="http://addyosmani.com/resources/essentialjsdesignpatterns/book/">http://addyosmani.com/resources/essentialjsdesignpatterns/book/</a>

---

#### Generated code

    [lang=js]
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

---

#### TypeScript module

    [lang=js]
    module MyModule {
        export var foo = "foo";
        export function bar() {
            return "bar";
        }
    }

---

#### Namespacing fundamentals
##### 5. Immediately-invoked Function Expressions (IIFE)s

    [lang=js]
    var MyModule = MyModule || {};

    (function( MyModule ){
        MyModule.foo = "foo";
        MyModule.bar = function(){
            return "bar";
        };
    })( MyModule );

<a style="font-size: 10px;" href="http://addyosmani.com/resources/essentialjsdesignpatterns/book/">http://addyosmani.com/resources/essentialjsdesignpatterns/book/</a>

---

#### TypeScript Generated code

    [lang=js]
    var MyModule;
    (function (MyModule) {
        MyModule.foo = "foo";
        function bar() {
            return "bar";
        }   
        MyModule.bar = bar;
    })(MyModule || (MyModule = {}));

---

#### TypeScript interfaces

    [lang=js]
    interface ICar {
        drive: () => void;
        toString: () => string;
        color: string;
    };

---    

#### TypeScript Generated code

***

### Type annotations

---
    [lang=js]
    function add(left, right) {
	  return left + right;
    }

---

    [lang=js]
    function add(left: number, right: number): number {
	  return left + right;
    }

***

#Demo

***
### Angular 2.0

---
    [lang=js]
    import {Component, Template} from 'angular2/angular2'

    @Component({
        selector: 'my-component'
    })
    @View({
        inline: "<div>Hello my name is {{name}}</div>"
    })
    export class MyComponent {
        constructor() {
            this.name = 'Max'
        }
        sayMyName() {
            console.log('My name is', this.name)
        }
    }

---

#### EcmaScript 6.0
    
http://kangax.github.io/compat-table/es6/
