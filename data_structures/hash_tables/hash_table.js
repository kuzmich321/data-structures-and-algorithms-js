class HashTable {
    constructor(size= 17) {
        this.keyMap = new Array(size)
    }

    _hash(key) {
        let total = 0
        let WEIRD_PRIME = 31

        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length
        }

        return total
    }

    set(key, value) {
        let index = this._hash(key)
        if (!this.keyMap[index]) {
            this.keyMap[index] = []
        }
        this.keyMap[index].push([key, value])
    }

    get(key) {
        let index = this._hash(key)
        if (!this.keyMap[index]) return undefined
        for (let el of this.keyMap[index]) {
            if (el[0] === key) return el[1]
        }
    }

    values() {
        let values = []

        for (let el of this.keyMap) {
            if (el) {
                for (let nestedEl of el) {
                    if (!values.includes(nestedEl[1])) values.push(nestedEl[1])
                }
            }
        }

        return values
    }

    keys() {
        let keys = []

        for (let el of this.keyMap) {
            if (el) {
                for (let nestedEl of el) {
                    if (!keys.includes(nestedEl[0])) keys.push(nestedEl[0])
                }
            }
        }

        return keys
    }
}

let ht = new HashTable()

ht.set('hello', 123)
ht.set('bye', 1000)
ht.set('pizza', 500)
ht.set('car', 800)
ht.set('orangered', '#000')

console.log(ht.keyMap)
console.log(ht.get('hello'))
console.log(ht.get('pizza'))
console.log(ht.get('bye'))
console.log(ht.get('car'))
console.log(ht.get('LOOOOOL'))

ht.set('black', '#000')
console.log(ht.values())
console.log(ht.keys())
