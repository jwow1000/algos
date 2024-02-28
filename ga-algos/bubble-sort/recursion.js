jumble = [5, 650, 65, 2, 3, 8, 2, 500, 1];
sorted = [1,2,3,5,4,6,7]
up = [4,5,6,3,2,1];

function sortRec(arr, id) {
    // define recursive function
    function descend(id, count) {
        console.log(id, count);
        if(arr[id] > arr[count-1] || count <= 0) {
            return count
        }
        descend(id, count - 1);
    }

    descend(id, id);
}


sortRec(up, 3);
