/*

Suppose you want to count the number of times a smaller string appears in a longer string

A straightforward approach involves checking pairs of characters individually

Pseudocode:
- Loop over the longer string
- Loop over the shorter string
- If the chars don't match, break out of the inner loop
- If the chars do match, keep going
- If you complete the inner loop and find a match, increment the count of matches
- Return the count

 */

const naiveSearch = (long, short) => {
    let count = 0
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            if (short[j] !== long[i+j]) break
            if (j === short.length - 1) count++
        }
    }
    return count
}


console.log(naiveSearch('lorie loled', 'lo'))
console.log(naiveSearch('lorie loled', 'pop'))
