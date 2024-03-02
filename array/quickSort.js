const arr = [4,1,6,9,3,2,8,7];

function quickSort( arr ) {
    if(arr.length <= 1) return arr;
    const num = arr[0];
    let left = [], right = [];
    for(let i = 1;i < arr.length; i++) {
        if(arr[i]<=num) left.push(arr[i]);
        else right.push(arr[i]);
    }
    return quickSort(left).concat([num],quickSort(right));
}

function quickSort1( arr ) {
    const index = 0;
    let i = 1;
        let j = arr.length-1;
    while (i<j) {
        if(arr[i] < arr[index]) {

        }

    }
    for (let i = 1, j = arr.length-1; i < j;) {
        if(arr[i] < item) {
            [arr[i], arr[index]] = [arr[index], arr[i]];
            i++;
        }else if(arr[index] > arr[0]) {
            [arr[j], arr[index]] = [arr[index], arr[j]];
            j--;
        }
    }
}



console.log(quickSort(arr));
