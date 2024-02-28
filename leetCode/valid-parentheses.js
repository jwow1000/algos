// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

//  1.   Open brackets must be closed by the same type of brackets.
//  2.   Open brackets must be closed in the correct order.
//  3.   Every close bracket has a corresponding open bracket of the same type.


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
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
