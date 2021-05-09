/*

A LIFO data structure!

The last element added to the stack will be the first element removed from the stack

Where stacks are used
- Managing function invocations
- Undo / Redo
- Routing (the history object in the browser) is treated like a stack

 */

let stack = []

stack.push('google.com')
stack.push('instagram.com')
stack.push('youtube.com')

console.log(stack)
stack.pop()
stack.pop()
stack.push('amazon.com')
console.log(stack)
