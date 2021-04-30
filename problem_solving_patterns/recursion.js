/*

What is recursion? - A process that calls itself

It's everywhere!
- JSON.parse / JSON.stringify
- document.getElementById and DOM traversal algorithms
- Object traversal
- It's sometimes a cleaner alternative to iteration

In almost all program languages, there is a built in data structure that manages
what happens when functions are invoked

The Call Stack
- It's a stack data structure
- Any time a function is invoked it's placed (pushed) on the top of the call stack
- When the code executes the interpreter sees the return keyword or when the function ends, the compiler will remove

You're used to functions being pushed on the stack and popped off when they are done
When we write recursive functions, we keep pushing new functions onto the call stack

Base Case
The condition when the recursion ends
This is the most important concept to understand

 */

function countDown(num) {
    if (num <= 0) {
        return console.log('Well done!')
    }
    console.log(num)
    num--
    countDown(num)
}


countDown(5)


function sumRange(num) {
    if (num === 1) return 1
    return num + sumRange(num - 1)
}

console.log(sumRange(3))


function factorial(num) {
    let total = 1
    for (let i = num; i > 0; i--) {
        total *= i
    }
    return total
}

console.log(factorial(3))


function factorial_recursive(num) {
    if (num <= 1) return 1
    return num * factorial_recursive(num - 1)
}

console.log(factorial_recursive(3))