// last thing put in is first thing to come out
// LIFO
// 
// 1 + sum(0)
// 2 + sum(1)
// 3 + sum(2)

function sum(number){
    // base case
    if(number <= 1) return 0;
    
    return number + sum(number-1);

}

console.log( sum(3) );
