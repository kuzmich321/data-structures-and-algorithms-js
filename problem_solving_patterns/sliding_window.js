/*

This pattern involves creating a window which can either be an array or number from one position to another
Depending on a certain condition, the window either increases or closes (and a new window is created)
Very useful for keeping track of a subset of data in an array/string etc.

Example:
Write a function called maxSubarraySum which accepts an array if integers and a number called n.
The function should calculate the maximum sum of n consecutive elements in the array.

 */


// O(N) - Time
const maxSubarraySum = (arr, num) => {
    if (arr.length < num) return null
    let max = 0
    for (let i = 0; i < num; i++) {
        max += arr[i]
    }
    let temp = max
    for (let i = num; i < arr.length; i++) {
        temp = temp - arr[i - num] + arr[i]
        max = Math.max(max, temp)
    }
    return max
}

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3))
