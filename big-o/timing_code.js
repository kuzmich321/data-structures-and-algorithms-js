const performance = require('perf_hooks').performance;

// An Example

// Number of operations is (eventually) bounded by a multiple of N (say, 10n)
// O(n)
const addUpTo = n => {
    let total = 0
    for (let i = 1; i <= n; i++) {
        total += i
    }
    return total
}
let start = performance.now()
addUpTo(1000000000)
let end = performance.now()
console.log(`Time Elapsed: ${(start - end) / 1000} seconds.`)

const addUpTo2 = n => {
    return n * (n + 1) / 2  // Always 3 operations => O(1)
}
let start2 = performance.now()
addUpTo2(1000000000)
let end2 = performance.now()
console.log(`Time Elapsed: ${(start2 - end2) / 1000} seconds.`)


// Another Example
// O(n)
function countUpAndDown(n) {
    console.log('Going up!')
    for (let i = 0; i < n; i++) {       // O(n)
        console.log(i)
    }
    console.log('At the top!\nGoing down...')
    for (let j = n - 1; j > 0; j--) {   // O(n)
        console.log(j)
    }
    console.log('Back down. Bye!')
}
countUpAndDown(10)
console.log('---------------------')


// O(n^2)
function printAllPairs(n) {
    for(let i = 0; i < n; i++) {
       for(let j = 0; j < n; j++) {
            console.log(i, j)
        }
    }
}
printAllPairs(10)
console.log('---------------------')

