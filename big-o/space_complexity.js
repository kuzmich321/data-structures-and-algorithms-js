// Space Complexity in JS

/*
- Most primitives (booleans, numbers, undefined, null) are constant space
- Strings require O(n) space (where n is the string length)
- Reference types are generally O(n), where n is the length (for arrays)
or the number of keys (for objects)
 */

// Example

// O(1) space
function sum(arr) {
    let total = 0; // one number
    for (let i = 0; i < arr.length; i ++) { // i=0 another number
        total += arr[i]
    }
    return total
}

// O(n)
function double(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i])
    }
    return newArr
}