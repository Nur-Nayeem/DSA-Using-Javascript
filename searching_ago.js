
// Sarching algorithms 

// linea search 
const linearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}
// time complexity O(n)

// let arr = [45, 3, 21, 5, 7, 9, 77, 5]

// console.log(linearSearch(arr, 70))


// binary search 

const binarySearch = (arr, target) => {
    let startIdx = 0;
    let endIdx = arr.length - 1
    while (startIdx <= endIdx) {
        let mid = Math.floor((startIdx + endIdx) / 2)
        if (arr[mid] === target) {
            return mid;
        }
        else if (arr[mid] < target) {
            startIdx = mid + 1;
        }
        else {
            endIdx = mid - 1;
        }
    }
    return -1;
}
//time complexity O(logn)
// const arr = [2, 5, 8, 12, 33, 55, 67]

// console.log(binarySearch(arr, 67))


// biinary search using recursion 
const binarySearchRecurson = (arr, target) => {
    return search(arr, target, 0, arr.length - 1);
}

const search = (arr, target, startIdx, endIdx) => {
    if (startIdx > endIdx) {
        return -1;
    }
    let mid = Math.floor((startIdx + endIdx) / 2)
    if (arr[mid] === target) {
        return mid;
    }

    if (arr[mid] < target) {
        return search(arr, target, mid + 1, endIdx)
    }
    else {
        return search(arr, target, startIdx, mid - 1)
    }
}

//time complexity O(logn)
// const arr = [2, 5, 8, 12, 33, 55, 67]

// console.log(binarySearchRecurson(arr, 67));


