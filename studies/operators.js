/* Operators */
// 1.   Assingment Operators
    // Basic assignment operator is '='
        // assigns the value to its left operand based on the value to its right 
        // (cont.) operand
        // used to assign a value to a variable
        // chaining assignment operators would result in multiple variables to 
        // (cont.) the same value i.e. x = 10, z = y = x, z = 10
        
    // Addition assignment operator is '+='
        // adds the value to the left of the += to the right of the
        // (cont.) += and returns the value of the two added together.
        // x += y   *is equal to*    x = x + y
   
    // Subtraction assignment operator is '-='
        // subtracts the value on right side of the -= from the variable on the
        // (cont.) left side. 
        // retuns the value of differance
        // x -= y   *is equal to*   x = x - y
   
    // Multiplication assignment operator is '*='
        // mutiplies the value to the left of the *= to the right of the
        // (cont.) *= and returns the value of the two multiplied together.
        // x *= y   *is equal to*    x = x * y  
    
    // Division assignment operator is '/='
        // divides the value to the left of the /= by the right of the
        // (cont.) /= and returns the value of the leftside/rightside.
        // x /= y   *is equal to*    x = x / y      
    
    // Remainder assignment operator is '%='
        // divides a variable by the value on the right operand and the remainder
        // (cont.) is assigned to the variable
        // x %= y   *is equal to*  x = x % y
        // x = 5 %= 2   *is equal to* 5/2= 2 remainder 1 , 1 is now the value of x
    
    // Exponentiation assignment operator is '**='
        // evaluates to the result of raising whats on the first operand by the 
        // (cont.) power of the second operand
        // x **= y  *is equal to*   x = x ** y
    
    // Left Shift assignment operator is <<=
        // moves the specified amount of bites to the left and assigned the
        // (cont.) result to the variable
        // x <<= y  *is equal to*   x = x << y
        // var bar = 5; //  (00000000000000000000000000000101)
        // bar <<= 2; // 20 (00000000000000000000000000010100)
    
    // Right Shift assignment operator is >>=
        // moves the specified amount of bites to the right and assigned the
        // (cont.) result to the variable
        // x >>= y  *is equal to*   x = x >> y
        // var bar = 5; //   (00000000000000000000000000000101)
        // bar >>= 2;   // 1 (00000000000000000000000000000001)
    
    // Unsigned Right Shift assignment operator is >>>=
        // moves the specified amount of bites to the right and assigned the
        // (cont.) result to the variable
        // x >>>= y  *is equal to*   x = x >>> y
        // var bar = 5; //   (00000000000000000000000000000101)
        // bar >>>= 2;  // 1 (00000000000000000000000000000001)
        
/*****************************************************************************/        
/*****************************************************************************/ 

// 2. Arithmetic Operators
    // Addition (+)
        // produces the sum of numeric operands or strings concatenation.
        // a + b
        // 1 + 1
        // "this " + "and that"
    
    // Subtraction (-)
        // subtracts the two operands and gives us the differance
        // a - b
        // 2 - 1
    
    // Division(/)
        // produces a quotient of its operands
        // left operand is divided by the right operand
        // a / b
        // 2 / 1
    
    // Multiplication(*)
        // produces a product of its operands
        // a * b
        // 2 * 2
    
    // Remainder (%)    
        // returns the remaider that is left over when the left operand
        // (cont.) is divided by the right operand.
        // takes the sign (+ or -) of the dividend
        // 12 % 5 = 2
        // 15 % 7 = 1
    
    // Exponentiation (**)
        // returns the result of raising the left operand by the right operand
        // a ** b  (like a^b)
        // 3 ** 2 = 9
        // 4 ** 3 = 64
        // -(2 ** 2) = -4
        // (-2) ** 2 = 4
    
    // Increment (++)
        // adds one to the operand and returns a value
        // a++ or ++a
        // var x = 4
        // y = x++
        // x = 4, y = 5
    
    // Decrement (--)
        // subtract one to the operand and returns a value
        // a-- or --a
        // var x = 4
        // y = x--
        // x = 4, y = 3 
    
/*****************************************************************************/        
/*****************************************************************************/ 

// 3. Comparison Operators    
    // Equality Operators
        // Equality (==)
            // converts the operands if they are not the same 
            // (cont.) type (i.e. string, number)
            // 5    ==  5       // true
            // '5'  ==  5       // true
            // 0    == '5'      // false
        
        // Inequality (!=)
            // converts the operands if they are not the same 
            // (cont.) type (i.e. string, number)
            // 5    !=  5       // false
            // '5'  !=  5       // false
            // 0    != '5'      // true
        
        // Identity / Strict Equality (===)
            // returns true if the opdrands are strictly equal
            // 5 === 5          // true
            // 5 === '5'        // false 
            // 5 === 4          // false
            
        // Non-Identity / Strict Inequality (!==)
            // returns true if the opdrands are strictly equal
            // 5 !== 5          // false
            // 5 !== '5'        // true   
            // 5 !== 4          // true
    
    //Relational operators
        // Greater than operator (>)
            // if the left operand is greater than the right, returns true
            // a > b
            // 5 > 4; returns true
            // 4 > 5; returns false
            
        // Greater than or equal operator (>=)
            // if the left operand is greater than or equal to the right, returns true
            // a >= b
            // 5 >= 4; returns true    
            // 5 >= 5; returns true
            
        // Less than operator (<)
            // if the left operand is less than the right, returns true
            // a < b
            // 4 < 5; returns true
            // 5 < 4; returns false
        
        // Less than or equal to operator (<=)
            // if the left operand is less than or equal to the right, returns true
            // a <= b
            // 4 <= 5; returns true
            // 4 <= 4; returns true  

/*****************************************************************************/        
/*****************************************************************************/ 

// 4. Logical Operators 

        // Operator         ||	    Syntax      ||  Description
        // Logical AND (&&)	||  expr1 && expr2	||  If expr1 can be converted to true, returns expr2; else, returns expr1.
        // Logical OR (||)	||  expr1 || expr2	||  If expr1 can be converted to true, returns expr1; else, returns expr2.
        // Logical NOT (!)	||  !expr	        ||  Returns false if its single operand can be converted to true; otherwise, returns true.
        
    // Logical And (&&)
        // a = true  && true       // t && t returns true   // right operand returned becuase left is true
        // b = true  && false      // t && f returns false  // right operand returned becuase left is true
        // c = false && true       // f && t returns false  // left operand returned because left is false
        
    // Logical Or (||)
        // a = true  || true       // t || t returns true   // left operand returned because left is true
        // b = false || true       // f || t returns true   // right operand returned because left is false
        // c = true  || false      // t || f returns true   //  let operand returned because left is true
    
    // Logical Not (!)
        // a = !true               // !t returns false      // false returned because operand is true
        // b = !false              // !f returns true       // true returned because operand is false
        // c = !''                 // !f returns true       // true returned because operand is false
        // d = !'Cat'              // !t returns false      // false returned because operand is true
        
/*****************************************************************************/        
/*****************************************************************************/ 

// 5. Unary Operators      
    // A operation with only one operand
        // delete
            // Deletes an object, an objects property or an element at a index that is specified.
            // delete object;
            // delete object.property;
            // delete object[specified index]\
            
        // typeof 
            // returns a sting telling us the type of the operand.
            // has the ability to return
                // function
                // string
                // number
                // object
                // undefined
                // boolean
                // null returns object
                // array returns object
                // date returns object
                
        // void   
            // allows us to evaluate an expression but not return its value.
            // this means it will return as undefined.
            // void is not a function but it usually best practice to use it with ()
            // used with hyperlink text to hide
            
        // Unary Plus (+)
            // is placed before the operand and tries to convert into a number
            // converts all representations to numbers
                // +'3'     // returns 3
                // +true    // returns 1
                // +false   // returns 0
            //if operand cannot be converted to a number, will return NaN
            
        // Unary Negation (-)
            // is placed before the operand and tries to convert into a number
            // it perforems just like unary plus, but with negation
                // -'3'     // returns -3
                // -true    // returns -1
                // -false   // returns -0
        // Logical Not (!)
            // is place before teh operand and tries to convert into a boolean equivalent
            //(cont.) before negating it
                // !false   // returns true
                // !NaN     // returns true
                // !null    // returns true
                // !42      // returns false
        // Bitwise not (~)
            // Inverts all the bits in the operand and returns a number.
            // using a bitwise not on a number changes to -(x + 1)
                // ~2       // returns -3
                // ~'2'     // returns -3
                // ~true    // returns -2
                // ~false   // returns -1    

/*****************************************************************************/        
/*****************************************************************************/ 

// 6. Ternary Operators
    // only operator to take three operands
    // used as a short cut for the if statement
        //  Syntax
            // condition ? exprT : exprF
            // an expression whose value is used as a condition
            // exprT is the expression if our statement is true (truthy)
            // exprF is the expression if our statement if false (falsy)
                // if false, the expresssion may be:
                    // null
                    // NaN
                    // 0
                    // "" (an empty string)
                    // undefined
                // very ideal if our values are missing or 0
    
    //function example(…) {
            //return condition1 ? value1
                //: condition2 ? value2
                //: condition3 ? value3
                //: value4;
                //}

// Equivalent to:

    // function example(…) {
        //if (condition1) { return value1; }
        //else if (condition2) { return value2; }
        //else if (condition3) { return value3; }
        //else { return value4; }
        //}