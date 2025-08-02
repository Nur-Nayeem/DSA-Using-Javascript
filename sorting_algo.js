
// sorting algorithm 
// bubble sort 
const bubbleSort = (arr) => {
    let length = arr.length;
    let swapped;
    do {
        swapped = false
        for (let i = 0; i < length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swapped = true;
            }
        }
    }
    while (swapped)

}
//time comlexity is O(n^2)

// let arr = [7, 2, 9, 0, 3, 4, 2, 11, 6]

// bubbleSort(arr)
// console.log(arr);



// insertion sort:
const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let numberToInsert = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > numberToInsert) {
            arr[j + 1] = arr[j]
            j = j - 1;
        }
        arr[j + 1] = numberToInsert;
    }
}
//time complexity O(n^2)
// const arr = [7, 2, 9, 0, 3, 4, 2, 11, 6]
// insertionSort(arr)
// console.log(arr)




// quick sort 
const quickSort = (arr) => {
    if (arr.length < 2) {
        return arr;
    }
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        }
        else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}
//worst case complexity: O(n^2)

//avg case complexity: O(nlogn)

// let arr = [7, 2, 9, 0, 3, 4, 2, 11, 6];

// console.log(quickSort(arr));





//marge-sort
const margeSort = (arr) => {
    if (arr.length < 2) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2)
    let leftArr = arr.slice(0, mid)
    let rightArr = arr.slice(mid)
    return marge(margeSort(leftArr), margeSort(rightArr))
}

const marge = (leftArr, rightArr) => {
    let tempSortedArr = []
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            tempSortedArr.push(leftArr.shift())
        }
        else {
            tempSortedArr.push(rightArr.shift())
        }
    }
    return [...tempSortedArr, ...leftArr, ...rightArr]

}

//time complexity: O(nlogn)

const arr = [7, 2, 9, 0, 3, 4, 2, 11, 6];

console.log(margeSort(arr));







