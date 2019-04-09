/* functions */
    // 1. first we must declare a function
        // (cont.) next we can execute a function by calling a function
    // 2. What’s the difference between a function’s parameters and arguments PASSED to a function?
        // A functions parameters are the values that we are leaving up to input
        // in order for our function to take arguements later on.
        // Those arguements are then placed in place of parameters and 
        // the function is executed. 
    // 3. What’s the syntax for a NAMED function?
        // function(parameter1, parameter2){
        //   return function body
        //}
    // 4. How do we assign a function to a variable?
        // assuming its an anon function
        // var fun = function(){}
        // allowing us to use anon function by typing
        // function fun(){}
    // 5. Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. 
    // How do we specify inputs, and how do we specify outputs?
        // we specifiy inputs by using parameters.
        // The actions performed in the function can differ 
        // (cont.) from what is returned from the function.
    // 6. Scope: Functions can see and modify variables in parent or global scopes. The inverse is NOT true.
        // Functions are able to call upon and change variables in the scopes it has access to.
        // Functions are not able go further in other scopes due to its limited access to variables.
        // Scope is layered like a hierarchy. 
        // local scope have access to parent scopes
        // parents have access to global scope
        // functions create scope via closure
    // 7. Closures: Functions form closures around the data they house. If an object returned 
    //  from the Function and is held in memory somewhere (referenced), that closure stays ALIVE,
    //  and data can continue to exist in these closures!
        // When dealing with functions, we often need information to be returned or avaiable outside of a
        // (cont.) function's scope. 
    