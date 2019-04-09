/* Control Flow */
    // 1. If
        // An if statement executes a statement if the specified condition is truthy
        // if false, executed statement is different
            //  if (condition){      // condition is either true or false
            //      statement1      // statement that will run if true
            //  } else {
            //      statement2     // statement that will run if false
            //  }
            
    // 2. Else-if
        // when multiple if...else statement are made, we create an 'else if' clause
        
    // 3. Else
        // a blanket statement. If our 'if...else' statement goes through
        // (cont.) all 'if' statements and none of them apply to our conditions
        // (cont.) else is a blanket term that allows us to return a value
        // (cont.) that we can specify 
        
    // 4. Switch
        //** USES STRICT COMPARISONS (===) **//
        // Switch statements take an expression, match the expression's value to a 
        // (cont.) case clause, then executes the statements associated with that case.
            // switch (expression){
            //  case value1:
                // 'executed statement if expression matches value1'
                // break;
            //  case value2:
                // 'executed statement if expression matches value2'
                // break;
            // default
                // 'executed statement if expression does not match
                // (cont.) any values'
                //    break;
            //  }  