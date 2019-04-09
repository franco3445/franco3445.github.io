/* Datatypes */
// 1.   Number
    // primitive data type
    // numeric data type
    // can be written with or without decimals
    // scientific notation can be used to represent very large or very small numbers
    

// 2.   String
    // primitive data type
    // primitive values are immutable
    // can hold data that is represented in text form
    // anything can be converted to a string
    // zero index
            //How to access the characters in a string:
                //charAt() method:   return 'franco'.charAT(0);  would return 'f'
                //bracket notation: return 'franco'[0]; would return 'f'
    //Escape Notation
        //          Code        ||      Output
        //          \'          ||      single quote
        //          \"          ||      double quote
        //          \\          ||      backslash
        //          \n          ||      new line
        //          \r          ||      carriage return
        //          \v          ||      vertical tab
        //          \t          ||      tab
        //          \b          ||      backspace
     
     
// 3.   Boolean
    // primitive data type
    // primitive values are immutable
    // logical data type that can have only the values of true or false
    // new Boolean([value])
        // value is the initial value of the boolean
    // if there is no value or value is:
        //  0
        //  -0
        //  null
        //  false
        //  NaN
        // undefined
        // empty string ("")
        /*the value will return false*/
    
    
// 4.   Array
    // list-like objects
        // unlike objects, indexing uses integers to access values
    /*array declaration*/
    // var array = [1,2,3]
        // accessing array elements
 
            // console.log(array[0]) would result in '1'
            // console.log(array.0) would result in 'syntax error'
            // console.log(array[array.length - 1) would result in '3'
                // since arrays are zero indexed, first item is 0 
            // array.push(4) would result in [1,2,3,4]
            // array.pop() would result in [1,2,3] removes 4(last) and returns 4
            // array.shift() would result in [2,3] removes 1(first) and returns 1
            // array.unshift(1) would result in [1,2,3] addes to the front
    
    
// 5.   Object
    // often refered to as object literal
    // a collection of related data and/or functionality.
    /*object delclaration*/
    // var object = {}
    // object.key = 'value'
        // objects are always made with {curly brackets}
        // key is the way that we access the value that we have in the object.
        // keys are very similar to the integers used in arrays. 
    // var myDog = object()
        // myDog.breed = 'frenchie';
        // myDog.sound = 'ruff';
        //m yDog.size = 'small';
            // console.log(myDog) prints { breed: 'frenchie', sound: 'ruff', size: 'small' }
            // console.log(myDog.size) prints 'small'
            
            
// 6.   Function
    // a javascript procedure - a set of instructions that calcualte a value or perform a task
    /*function declarations*/
    // function add(num1, num2)
        // add is the name of the function created
        // in () thre is a list of parameters seprated by a commas
        // statement that defines the fucntion is enclosed in {}
    /*how to call a function*/
    // add(1,2)
        // this would enter the arguements (1,2) into our add function
        // providing us with the value of 3
    // arguements of a function can be more than strings and numbers
    // we can pass objects, functions, arrays, numbers, strings all through a function 
    // functions can also call themselves 
    // Nested Functions
        // functions can be placd inside other functions
        // nested function refers to the inner fucntion
        // the outer function contains the nested function
        // a closure is an expression that can have free variable rogether with an environment that binds those vairables. 
        // function addSquared(a, b) {
            // function square(x) {
                // return x * x;
                // }
            // return square(a) + square(b);
            // }
            // a = addSquared(2, 3); // returns 13
            // b = addSquared(3, 4); // returns 25
            // c = addSquared(4, 5); // returns 41
    
    
// 7.   undefined
    // primitive data type
    // primitive values are immutable
        // not writable
        // not enumerable
        // not configurable 
    // variables that have not been assigned value will return undefined
        // var x;
        // console.log(x) results in undefined
    // can be an identifier for a property of the global object    
        
// 8.   null
    // primitive data type
    // primitive values are immutable
    // reprsents the intentional absence of any object value
    // null is not an identifier for a property of the global object
    // 

// 9.   NaN
    // NaN is a value representing Not-A-Number
        // not writable
        // not enumerable
        // not configurable 
    // also can be seen as Number.Nan
    // rarely used in a program
    // it is normally seen as the returned value when math functions fail
    // NaN does not compare to any other value.
        // even other NaN values
    

// typeof null          // "object" (not "null" for legacy reasons)
// typeof undefined     // "undefined"
// null === undefined   // false
// null  == undefined   // true
// null === null        // true
// null == null         // true
// !null                // true
// isNaN(1 + null)      // false
// isNaN(1 + undefined) // true


// 10.  Infinity and -Infinity
    // infinity is greater than any other number
    // created in Javascript in order to behave the same as 'real life' infinity
    // negative infinity is lower than any other number

    
// 11.  What is the difference between primitive/simple and complex data types?
    // primitive data - single simple data value with no additional properties and methods
        //immutable - there is no way to change value once its created
        // compared by value
            // two values can be strictly equal
        // List:
            // number
            // string
            // boolean
            // undefined
            // null
    // non-primitive - object references   
        // mutable -values can be changed after the object is created
            // cannot be compared to other objects with the exact same elemnts in the exact same order 
            // values can be referred to as reference types because they are compared by reference instead of value
        // List:
            // function
            // object
            // array

            
// 12.  Primitive Values are passed to a function BY COPY, complex values are 
// cont.BY REFERENCE. What does that mean, and how are they different?
    // primitive values are literally copied into a function and then executed. 
    // complex values can be used in place of primitive values and will still go
    // back and refer to what value should be which may be both either primitive or complex functions