# Objects


    Write an object constructor and instantiate the object.

    ```
    function Class(var1, var2) {
        this.var1 = var1
        this.var2 = var2
    }
    const player = new Class('steve', 'X')
    ```

    or 

    ```
    class ClassName {
        constructor(params) { 
            ...
        }
        methodName() {
         ...
        }
        methodName() { 
            ...
        } 
    }
    ```


    Describe what a prototype is and how it can be used.
    prototype attribute -> object's parent class
    prototype property -> where properties, vars, and methods are attached to

    Explain prototypal inheritance.
    when an object is declared with `new Class()` syntax, it has all the `Class`'s vars and methods 

    Understand the basic do’s and don’t’s of prototypical inheritance.
    ```
    // don't do this!!!
    Obj.prototype = AnotherObj.prototype
    ```
    
    Explain what Object.create does.
EighthGrader.prototype = Object.create(Student.prototype)
`Object.create` simply returns a new object with the specified prototype and any additional properties you want to add

