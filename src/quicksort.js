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

var arr = Array.from({length: 1000}, () => Math.floor(Math.random() * 1000));
console.log(arr);
quicksort(arr, 0, arr.length - 1);
console.log(arr);