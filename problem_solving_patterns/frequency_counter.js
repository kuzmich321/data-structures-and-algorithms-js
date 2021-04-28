/*

This pattern uses objects or sets to collect values/frequencies of values
This can often avoid the need for nested loops or O(N^2) operations with arrays/strings

Example:
Write a function called same, which accepts two arrays.
The function should return true/false if every value in the array has
it's corresponding value squared in the second one. The length of arrays must be the same.

 */

const same = (firstArray, secondArray) => {
    if (firstArray.length !== secondArray.length) return false

    let frequencyCounter = {}

    secondArray.forEach(item => {
        frequencyCounter[item] = true
    })

    for (let num of firstArray) {
        if (!frequencyCounter[num ** 2]) return false
    }

    return true
}


console.log(same([1, 2, 3], [1, 4, 9]))
console.log(same([1, 2, 4], [1, 4, 9]))
console.log('-----------------------')


const isAnagram = (firstStr, secondStr) => {
    if (firstStr.length !== secondStr.length) return false

    let frequencyCounter = {}

    for (let char of firstStr) {
        frequencyCounter[char] = ++frequencyCounter[char] || 1
    }

    for (let char of secondStr) {
        if (!frequencyCounter[char] && !frequencyCounter[char] >= 1) {
            return false
        }
        frequencyCounter[char]--
    }

    return true
}

console.log(isAnagram('asd', 'asd'))
console.log(isAnagram('aabbcc', 'aaabbc'))
