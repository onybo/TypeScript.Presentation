- title : Using TypeScript
- description : My experiences using TypeScript to develop LOB applications
- author : Olav Nybø
- theme : sky
- transition : default

***

## TypeScript



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


-          Tooling
Web essentials, map files, chrome developer tools
-          TypeScript type definitions
DefinitelyTyped, *.d.ts files
-          Selv om typescript har klasser, så er en ikke nødt til å bruke klasser overalt
demo på hvordan vi har laget noen av våre directives som Typescript functions (men vi har fortsatt alle de andre fordelene med Type 
annotations, fat-arrow functions og generics.
-          Bruk av Fat arrows I klasser og this reference
Demo 
-          Generics for typesterke lister
Demo med web-api metoder som returnerer lister av KeyValuePair<int, string> som vi konsumerer med typete generics i TypeScript
-          Angular controller as syntaksen kombinert med controller implementert som en TypeScript class gir veldig lesbar kode
Ser på en eksempel implementasjon
-          Angular 1.3 med TypeScript controllere kan minne veldig mye om Angular 2.0 components
Se på 1.3 og 2.0 kode ved siden av hverandre for å se at det ikke er så store forskjeller som noen kanskje skal ha det til

