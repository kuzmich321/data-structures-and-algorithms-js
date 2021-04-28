/*
Constants Don't Matter
--------------------------
0(2n)       ==>  O(n)
O(500)      ==>  O(1)
O(13n^2)    ==>  O(n^2)

Smaller Terms Don't Matter
--------------------------
O(n + 10)       ==>  O(n)
O(1000n + 50)   ==>  O(n)
O(n^2 + 5n + 8) ==>  O(n^2)

Big O Shorthands
--------------------------
1. Arithmetic operations are CONSTANT
2. Variable assignment is CONSTANT
3. Accessing elements in array (by index) or object (by key) is CONSTANT
4. In a loop, the time complexity is the length of the loop times the complexity of whatever happens inside of the loop

 */

// Examples:

// O(n)
function logAtLest5(n) {
    for (let i = 1; i <= Math.max(5, n); i++) {
        console.log(i)
    }
}

// O(1)
function logAtMost5(n) {
    for (let i = 1; i <= Math.min(5, n); i++) {
        console.log(i)
    }
}