/*

Creating <pointers> or values that correspond to an index or position and move towards
the beginning, end or middle based on a certain condition

Very efficient for solving problems with minimal space complexity as well

Example:
Write a function called <sumZero> which accepts a <sorted> array of integers. The function should find the <first>
pair where the sum is targetSum.
Return array that includes both values that sum to zero or empty array if a pair doesn't exist.

 */

// O(N) - Time
// O(1) - Space
const twoNumberSum = (arr, targetSum) => {
    let left = 0
    let right = arr.length - 1
    while (left < right) {
        let currentSum = arr[left] + arr[right]
        if (currentSum === targetSum) return [arr[left], arr[right]]
        else if (currentSum > targetSum) right--
        else if (currentSum < targetSum) left++
    }
    return []
}

console.log(twoNumberSum([-3, -2, -1, 0, 1, 3, 6], 4))


/*

Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
There can be negative numbers in the array, but it'll always be sorted

 */

// O(N) - Time
// O(1) - Space
const countUniqueValues = arr => {
    let firstPointer = 0
    let secondPointer = 1
    let uniqueValues = 0
    while (secondPointer < arr.length) {
        let firstValue = arr[firstPointer]
        let secondValue = arr[secondPointer]
        while (firstValue === secondValue) {
            secondPointer += 1
            secondValue = arr[secondPointer]
        }
        uniqueValues += 1
        firstPointer = secondPointer
        secondPointer += 1
    }
    return uniqueValues
}

console.log(countUniqueValues([1, 1, 1, 1, 2, 3, 3, 3, 4, 4]))
console.log(countUniqueValues([]))
console.log(countUniqueValues([1, 1, 1]))