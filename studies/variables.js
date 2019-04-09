/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

//4. different way to declare a variable //

//var variableVar; 
//var allows the variable to be reassigned if needed.
//var can have global and block scope.
//use same declaration when trying to re-declare a variable. Failure will lead to a SyntaxError.

//let variableLet;
//let declares our variable with limited schope within our block, statement, or expression.
//let allows our variable to be reassigned if needed. 
//use same declaration when trying to re-declare a variable. Failure will lead to a SyntaxError.

//const variableCons;
//let declares our variable with limited schope within our block, statement, or expression.
//const variables cannot be reassigned.
//const variables cannot be redeclared. 
//const creates a read-only refernce to a value
//both arrays and objects can be declared with const
    //both may have contents altered
    //the variable identifier cannot be reassigned. 


/*Hoisting*/
//applies to variable declarations AND function declarations
//if a declartion is hoisted, it is taken to the top of thier scope.

/*Variable Hoisting*/
//when a var is hoisted, only the name will be carried to the top, not the value the variable represents.
//variables can be declared anywhere because of this (does not mean they should be)
//scope heavily affects on where the variable is available. (before of after its declaration)
//will remain with no value until assigned.

/*Function Hoisting*/
//when a function is hoisted, the assigne value is hoisted with it (at all times)
//function can be declared anywhere because of this (does not mean they should be)
//function can be typed out after and still return with a value.

//type of Declaration   Var             ||      Let     ||      Const
//Reassign?             Yes             ||      Yes     ||      NO
//Scope?                Global & Block  ||      Block   ||      Block