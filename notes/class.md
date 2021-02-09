# class

1. Describe the pros and cons of using classes in JavaScript.

- pros:
    - better syntax
    - flexibility, can still use function factory, object lieteral
- cons
    - class isn't real. objects are created without class
    - inheritence: the `child.prototype` points to a parent
    

2. Briefly discuss how JavaScript’s object creation differs from a language like Java or Ruby.
In JavaScript, a class is a function. class is its own `class.prototype.constructor`

in other OOP languages, a class is an extensible program-code-template for creating objects

3. Explain the differences between using a class to define a constructor and other prototype methods.
- you can rewrite class entirely with functions
- a function created by class is labelled by a special internal property `[[FunctionKind]]:"classConstructor"`
- class must be called with `new` keyword
- Class methods are non-enumerable. we don't want `for ... in` to return all the methods!
- all code inside the class is `use strict` by default
    - code written here is subject to stricter syntax for increased performance

4. Explain what “getters” & “setters” are.
functions to get or set class properties/variables

5. Understand what computed names and class fields are.
- computed names
you can concatenate function names on the go
```
class User{
  ['say' + 'Hi']() {
    alert("Hello");
  }
}
```
- class fields
```
class User {
  name = "John";

  method() {
    alert(`Hello, ${this.name}!`);
  }
}
```

6. Describe function binding.
functions need to bind to a context
- this refers to the instance in constructor
- this refers to the element that the event handler is attached to
- if you want this to refer to the instance object, you need to bind event listeners

7. Be able to use inheritance with classes.

```
class Lion extends Cat {
  speak() {
    super.speak(); // call Cat.speak()
    console.log(`${this.name} roars.`);
  }
}

```


8. Briefly talk about the conflict in JS with functional programming and classes.

- In JS functions are first-class citizens
- functional programming favors composition over inheritence
