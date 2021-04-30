/*

Pure Recursion Tips
- For arrays, use methods like slice, the spread operator, and concat that make copies of arrays
so you do not mutate them
- Remember that strings are immutable so you will need to use methods like slice, substr, or substring
to make copies of strings
- To make copies of objects use Object.assign, or the spread operator

 */

function outer(input) {
    let outerScopedVariable = []

    function helper(helperInput) {
        helper(helperInput--)
    }

    helper(input)

    return outerScopedVariable
}


function collectOddValues(arr) {
    let result = []

    function helper(helperInput) {
        if (!helperInput.length) return

        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }

        helper(helperInput.slice(1))
    }

    helper(arr)

    return result
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8]))


function collectOddsByPureRecursion(arr) {
    let newArr = []

    if (!arr.length) return newArr

    if (arr[0] % 2 !== 0) newArr.push(arr[0])

    newArr = newArr.concat(collectOddsByPureRecursion(arr.slice(1)))

    return newArr
}


console.log(collectOddsByPureRecursion([1, 2, 3, 4, 5, 6, 7, 8]))