/*-----------------------------------------------------------------
Challenge: 23-balancedBrackets
Difficulty:  Intermediate
Prompt:
- Write a function called balancedBrackets that accepts a single string as argument.
- The input string is composed entirely of parentheses, brackets and/or curly braces, i.e.,  (), [] and/or {}. Referred to as "braces" from this point forward...
- The balancedBraces function should return true if the string's braces are "balanced" and false if they are not.
- The brackets are considered unbalanced if any closing bracket does not close the same type of opening bracket, ignoring already matched brackets between them.  Examples explain it best...
Examples:
balancedBrackets( '()' ) // => true
balancedBrackets( '(]' ) // => false
balancedBrackets( '[{}]' ) // => true
balancedBrackets( '[(])' ) // => false
balancedBrackets( '[({}[])]' ) // => true
-----------------------------------------------------------------*/
// Your solution for 23-balancedBrackets here:

/**
 * @param {string} s
 * @return {boolean}
 */
const balancedBrackets = function(s) {
    if(s.length <= 1) return false
    // object translate
    const tObj = {
        "{": 1,
        "}": 1,
        "(": 2,
        ")": 2,
        "[": 3,
        "]": 3,
    }

    // array for tracking
    const open = [];

    let xPoint = -1;
    const strArr = s.split('');
    //console.log('check it', strArr);
    // fill the 2 arrays
    for(let i=0; i<strArr.length; i++) {
        const c = strArr[i];
        if(c === '{' || c === '(' || c ==='[') {
            xPoint++; // count is 0
            open[xPoint] = tObj[c]; // translate to int at n open Array
        } else {

            // test for closed
            const x = open[xPoint]; // last point in open
            const cT = tObj[c];
            //console.log('match', cT, open[xPoint]);
            if(cT === x ){
                open.pop();
                xPoint--;
            } else {
               xPoint++; // count is 0
               open[xPoint] = c; // translate to int at n open Array
            }

        }

    }

    return (open.length <= 0) ? true : false;


};
