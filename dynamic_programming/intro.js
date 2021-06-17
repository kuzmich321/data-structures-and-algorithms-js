/*

DYNAMIC PROGRAMMING
A method for solving a complex problem by breaking it down into a collection of simpler subproblems,
solving each of those subproblems just once, and storing their solutions

OVERLAPPING SUBPROBLEMS
A problem is said to have overlapping subproblems if it can be broken down into subproblems
which are reused several times

OPTIMAL SUBSTRUCTURE
A problem is said to have optimal substructure if an optimal solution can be constructed from optimal
solutions of its subproblems

 */


// Recursive
// O(2^n)
const fib = n => {
    return n <= 2 ? 1 : fib(n-1) + fib(n-2)
}


// MEMOIZATION
// Storing the results of expensive function calls and returning the cached result when the same inputs occur again

// O(n)
const fib2 = (n, memo=[]) => {
    if (memo[n]) return memo[n]
    if (n <= 2) return 1
    let result = fib2(n-1, memo) + fib2(n-2, memo)
    memo[n] = result
    return result
}

// const fib2 = (n, memo=[undefined, 1, 1]) => {
//     if (memo[n]) return memo[n]
//     let result = fib2(n-1, memo) + fib2(n-2, memo)
//     memo[n] = result
//     return result
// }

console.log(fib2(100))


/*

TABULATION
- Storing the result of a previous result in a "table" (usually an array)
- Usually done using iteration
- Better space complexity can be achieved

 */

const fib3 = n => {
    if (n <= 2) return 1
    let fibNums = [0, 1, 1]
    for (let i = 3; i <= n; i++) {
        fibNums[i] = fibNums[i-1] + fibNums[i-2]
    }
    return fibNums[n]
}

console.log(fib3(100))