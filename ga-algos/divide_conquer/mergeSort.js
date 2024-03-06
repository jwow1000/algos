// helper function: function for only using in another function

// define the array
const theArray = [0,5,3,2,1,8,9,-1000];


// this is the helper funtion, pass 2 SORTED arrays
function merge(arr1, arr2) {
    let results = [];
    
    // ----  pointers
    // array 1 pointer
    let i = 0;
    // array 2 pointer
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if(arr2[j] > arr1[i]) {
           results.push( arr1[i] );
           i++;
        } else {
           results.push( arr2[j] );
           j++;
        }
    }
    
    while(j < arr2.length) {
        results.push( arr2[j] );
        j++;
    }



    while(i < arr1.length) {
        results.push( arr1[i] );
        i++;
    }

    return results;
}

// main function
function mergeSort(arr) {
    if(arr.length <= 1) return arr;

    // split the array in half
    const mid = Math.floor(arr.length / 2);
    
    // slice and return new arrays
    const left = mergeSort( arr.slice(0, mid) );
    const right = mergeSort( arr.slice(mid) );

    // merge the left and right
    return merge(left, right);
}


console.log( mergeSort( theArray ) );
