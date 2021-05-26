// Works on strings only
// Not constant time
// Could be a little more random
const firstHash = (key, arrayLen) => {
    let total = 0
    for (let char of key) {
        let value = char.charCodeAt(0) - 96
        total = (total + value) % arrayLen
    }
    return total
}


/*

Prime numbers? wut.

The prime number in the hash is helpful in spreading out the keys more uniformly
It's also helpful if the array that you're putting values into has a prime length

You don't need to know why. (Math is complicated!)

 */
const hash = (key, arrayLen) => {
    let total = 0
    let WEIRD_PRIME = 31
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i]
        let value = char.charCodeAt(0) - 96
        total = (total * WEIRD_PRIME + value) % arrayLen
    }

    return total
}


console.log(firstHash('pink', 10))
console.log(firstHash('orange', 10))
console.log(firstHash('orangered', 10))
console.log(firstHash('cyan', 10))
console.log('--------------------------------')

console.log(hash('pink', 13))
console.log(hash('orange', 13))
console.log(hash('orangered', 13))
console.log(hash('cyan', 13))
