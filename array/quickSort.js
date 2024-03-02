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
    if (arr.length <=1) return arr;
    const index = 0;
    let i = 1;
     let j = arr.length-1;
    while (i<=j) {
        if(arr[i] > arr[index]) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            j--;
            continue;
        }
        if (arr[j]<arr[index]) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            continue;
        }
        i++;
        j--;
    }
    [arr[index], arr[j]] = [arr[j], arr[index]];
    return [...quickSort1(arr.slice(0, j)), arr[j] ,...quickSort1(arr.slice(i))];
}



console.log(quickSort1(arr));
