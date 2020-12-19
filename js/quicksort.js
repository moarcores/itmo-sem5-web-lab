function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

function partition(arr, l, r) {
    const pivot = arr[Math.floor((l + r) / 2)];
    let [i, j] = [l, r];
    while (i <= j) {
        while (arr[i] < pivot)
            i++;
        while (arr[j] > pivot) {
            j--;
        }
        if (i >= j)
            break;
        swap(arr, i++, j--);
    }
    return j;
}

function quicksort(arr, l, r) {
    if (l < r) {
        let q = partition(arr, l, r);
        quicksort(arr, l, q);
        quicksort(arr, q + 1, r);
    }
}

function findMin(array) {
    let min = Infinity;
    for (let it of array) {
        if (it < min)
            min = it;
    }
    return min;
}


function findMax(array) {
    let min = -Infinity;
    for (let it of array) {
        if (it > min)
            min = it;
    }
    return min;
}

function findMedian(array) {

    array.sort( function(a,b) {return a - b;} );

    const mid = Math.floor(array.length / 2);

    if(array.length % 2)
        return array[mid];
    else
        return (array[mid - 1] + array[mid]) / 2.0;
}


var arr = Array.from({length: 1000}, () => Math.floor(Math.random() * 1000));
console.log(arr);
quicksort(arr, 0, arr.length - 1);
console.log(arr);


var arr1 = [19, 5, 7, 9]
console.log(findMin(arr1))
console.log(findMax(arr1))
console.log(findMedian(arr1))