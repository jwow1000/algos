arr = [5, 6, 65, 2, 3, 8, 2, 500, 1, "jhi"];
sorted = [1,2,3,5,4,6,7]

function bubbleSort(arr) {
  let swap = false;
  const a = arr;
  const len = a.length;
  for (let i = 0; i < len-1; i++) {
    for (let j = 0; j < len - i; j++) {
      console.log('pass');
      // swap values
      if (a[j] > a[j + 1]) {
        // swap
        [a[j], a[j+1]] = [a[j+1], a[j]];
        swap = true;
      }
      
    }
    if(swap === false) {
      break;
    }
  }
  
  return a;
}


console.log( bubbleSort(sorted) );
