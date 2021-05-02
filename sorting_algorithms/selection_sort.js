/*

Similar to bubble sort, but instead of first placing large values into sorted position,
it places small values into sorted position

Pseudocode:
- Store the first element as the smallest value you've seen so fat
- Compare this item to the next item in the array until you find a smaller number
- If a smaller number is found, designate that smaller number to be the new minimum and
 continue until the end of the array
- If the minimum is not the value (index) you initially began with, swap the two values
- Repeat this with the next element until the array is sorted

 */

import {swap} from './swap_func.js'

// O(n^2)
const selectionSort = arr => {
    for (let i = 0; i < arr.length; i++) {
        let smallest = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[smallest]) smallest = j
        }
        if (i !== smallest) swap(arr, i, smallest)
    }

    return arr
}
console.log(selectionSort([34, 22, 10, 19, 17]))
