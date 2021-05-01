/*

There are many different search methods on array in JS
- indexOf
- includes
- find
- findIndex

 */

import {states} from './states.js'


console.log(states.indexOf('Indiana'))
console.log(states.includes('Texas'))


/*

Linear Search Pseudocode
- This function accept an array and a value
- Loop through the array and check if the current array element is equal to the value
- If it is, return the index at which the element is found
- If the value is never fond, return -1

 */


// O(N)
const linearSearch = (arr, val) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) return i
    }

    return -1
}


console.log(linearSearch([3, 10, 7], 7))
console.log(linearSearch(states, 'Utah'))
console.log(linearSearch(states, 'Utahhh'))
