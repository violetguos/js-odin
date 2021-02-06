# Factory Functions and the Module Pattern


1. Describe common bugs you might run into using constructors.

2. Write a factory method that returns an object.

```javascript
const personFactory = (name, age) => {
  const sayHello = () => console.log('hello!');
  return { name, age, sayHello };
};

const jeff = personFactory('jeff', 27);
```
3. Explain how scope works in JavaScript (bonus points if you can point out what ES6 changed!).

- before ES6
> All scopes in JavaScript are created with Function Scope only, they aren’t created by for or while loops or expression statements like if or switch. New functions = new scope - that’s the rule

- after ES6
- global scope
- function scope
- block scope: any pair of curly braces, e.g. if statements 

4. Explain what Closure is and how it impacts private functions & variables.

- closure: A function declared within a function
- the outer function has access to inner functions
- but outside the outer function, we don't have access to inner functions -> block scope
- closures declared with `const` or `let` have block scope
- closures can reference variables and arguments in the outer function
    - and when outer function returns, the variables passed from outer func to inner func are still accessible
    - it's called [currying](https://www.sitepoint.com/currying-in-functional-javascript/) 


5. Describe how private functions & variables are useful.
- prevent unintentional usage elsewhere in our program
- split our functions up as much as we want 
- only export the functions that the rest of the program is going to use

6. Use inheritance in objects using the factory pattern.

```javascript
const Person = (name) => {
  const sayName = () => console.log(`my name is ${name}`)
  return {sayName}
}

const Nerd = (name) => {
  // simply create a person and pull out the sayName function with destructuring assignment syntax!
  const {sayName} = Person(name)
  const doSomethingNerdy = () => console.log('nerd stuff')
  return {sayName, doSomethingNerdy}
}
```

or 

```javascript
const Nerd = (name) => {
  const prototype = Person(name)
  const doSomethingNerdy = () => console.log('nerd stuff')
  return Object.assign({}, prototype, {doSomethingNerdy})
}
```


7. Explain the module pattern.

- allows us to export and reuse it elsewhere

```javascript
const module_name = (() => {
  //const variables_ = ... ;
  return {
   var1
   // ....
  };
})();
```

8. Describe IIFE. What does it stand for?
- Immediately Invoked Function Expression
- with the trailing `()`, it immediately executes

9. Briefly explain namespacing and how it’s useful.
- Namespacing is a technique that is used to avoid naming collisions in our programs.
- encapsulate functions in different objects. e.g. `calculator.add()` vs `stonks.add()`