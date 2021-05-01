/*

Binary Search
- BS is a much faster form of search
- Rather than eliminate one element at a time, you can eliminate half of the remaining elements at a time
- BS only works on SORTED ARRAYS!

 */

import {states} from './states.js'


// O(logN) - Time
// O(1) - Space
const binarySearch = (sortedArr, value) => {
    let left = 0
    let right = sortedArr.length - 1

    while (left <= right) {
        let middle = Math.floor((left + right) / 2)
        let currentElement = sortedArr[middle]

        if (currentElement < value) left = middle + 1
        else if (currentElement > value) right = middle - 1
        else return middle
    }

    return -1
}


console.log(binarySearch(states, 'Texas'))

