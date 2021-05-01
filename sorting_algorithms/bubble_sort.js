/*

Bubble Sort

A sorting algorithm where the largest values bubble up to the top!

Pseudocode:
- Start looping from the end of the array towards the beginning
- Start an inner loop with a variable called j from the beginning until i -1
- If arr[j] > arr[j+1], swap those values
- Return the sorted array

 */


/*function swap(arr, idx1, idx2) {
    let temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
}*/


const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}


// O(n^2)
function bubbleSort(arr) {
    let noSwaps
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr, j, j+1)
                noSwaps = false
            }
        }
        if (noSwaps) break
    }
    return arr
}


console.log(bubbleSort([8, 1, 2, 3, 4]))

