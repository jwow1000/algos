listLol = [1, 2, 3, 0];

function checkDups(arr) {
  for (let i = 0; i < arr.length; i++) {
    const store = arr[i];
    arr[i] = "empty";
    
    if (arr.indexOf(store) != -1) {
      return true;
    }
    arr[i] = store;
  }

  return false;
}

console.log(checkDups(listLol));

