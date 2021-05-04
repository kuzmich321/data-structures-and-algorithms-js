/*

Radix sort is a special sorting algorithm that works on lists of numbers
It never makes comparisons between elements!
It exploits the fact that information about the size of a number is encoded in the number of digits
More digits means a bigger number!

In order to implement radix sort, it's useful to build a few helper functions first:
getDigit(num, place) - returns the digit in num at the given place value
digitCount(num) - returns the number of digits in num
mostDigits(nums) - Given an array of numbers, returns the number of digits in the largest numbers in the list

Radix Sort Pseudocode
- Figure out how many digits the largest number has
- Loop from k = 0 up to this largest number of digits
- For each iteration of the loop
    - Create buckets for each digit (0-9)
    - Place each number in the corresponding bucket based on its kth digit
- Replace out existing array with values in out buckets, starting with 0 and going up to 9
- Return list at the end!

 */


const getDigit = (num, i) => {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

const digitCount = num => {
    if (num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

const mostDigits = nums => {
    let max = 0
    nums.forEach(num => max = Math.max(max, digitCount(num)))
    return max
}

const radixSort = nums => {
    let maxDigitCount = mostDigits(nums)
    for (let i = 0; i < maxDigitCount; i++) {
        let digitBuckets = Array.from({length: 10}, () => [])
        nums.forEach(num => digitBuckets[getDigit(num, i)].push(num))
        nums = [].concat(...digitBuckets)
    }

    return nums
}

console.log(radixSort([23, 1254, 11, 54, 1, 100]))
