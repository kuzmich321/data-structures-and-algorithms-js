/*

It's a combination of two things - merging and sorting!
Exploits the fact that arrays of 0 or 1 element are always sorted
Works be decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array

- In order to implement merge sort, it's useful to first implement a function responsible fpr merging two sorted arrays
- Given two sorted arrays, this helper function should create a new array which is also sorted,
and consists of all of the elements in the two input arrays
- This function should run in O(n+m) time and O(n+m) space and should not modify the parameters passed to it

Merging Arrays Pseudocode:
- Create an empty array, take a look at the smallest values in each input array
- While there are still values we haven't looked at
    - If the value in the first array is SMALLER than the value in the second array, push the value in
    the first array into our results and move on to the next value in first array
    - If the value in the first array is LARGER than the value in the second array, push the value in
    the second array into our results and move on to the next value in the second array
    - Once we exhaust one array, push in all remaining values from the other array

MergeSort Pseudocode:
- Break the array into halves until you have the arrays that are empty or have one element
- Once you have smaller sorted arrays, merge those arrays with other sorted arrays until
you are back at the full length of the array
- Once the array has been merged back together, return the merged (and sorted!) array

 */


const merge = (firstArr, secondArr) => {
    let results = []
    let i = 0
    let j = 0

    while (i < firstArr.length && j < secondArr.length) {
        if (secondArr[j] > firstArr[i]) {
            results.push(firstArr[i])
            i++
        } else {
            results.push(secondArr[j])
            j++
        }
    }

    while (i < firstArr.length) {
        results.push(firstArr[i])
        i++
    }

    while (j < secondArr.length) {
        results.push(secondArr[j])
        j++
    }

    return results
}


console.log(merge([1, 10, 50], [2, 14, 99, 100]))


// O(N logN)
const mergeSort = arr => {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}


mergeSort([10, 24, 75, 73, 72, 1, 9])
