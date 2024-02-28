jumble = [5, 650, 65, 2, 3, 8, 2, 500, 1];
sorted = [1,2,3,5,4,6,7]

function mySort(arr) {
    // define new Array
    const newArr = [];
    // hi value, index
    let hi = arr[0];
    // define recursive function
    function descend(val, count, a) {
        console.log(val, count);
        if(val > a[count-1] || count <= 0) {
            return count
        }
        descend(val, count - 1, a);
    }
    
    for(let i=0; i<arr.length; i++) {
        const thisVal = arr[i];
        // is this val greater than the highest value?
        if( thisVal >= hi) {
            // yes, set the new highest value, continue loop
            newArr.push(thisVal);
            hi = thisVal;
        } else {
            // cascade with recursive function
            
            const idx = descend(thisVal, newArr.length-1, newArr);
            console.log(idx, thisVal)
            // insert item in newArray
            newArr.splice(idx, 0, thisVal);
           
            // check for null
            // if(i-2 >= 0) {
            //     // descend to find place
            //     let checkIdx = i-2;
            //     while(checkIdx >=0 || thisVal < arr[checkIdx] ) {
            //         checkIdx--;
            //     }
            //     // when while is over swap
            //     [ arr[i], arr[checkIdx+1]] = [ arr[checkIdx+1], arr[i] ]
            // } else {
            //     // botom of array so swap
            //     [ arr[i], arr[i-1]] = [ arr[i-1], arr[i] ]
            // }
        }
        
    }
}

console.log(jumble);
mySort(jumble);
console.log(jumble);