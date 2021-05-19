/*

Inserting Pseudocode:
- Create a new node
- Starting at the root
    - Check if there is a root, if not - the root now becomes that new node!
    - If there is a root, check if the value of the new node is greater than or less than the value of the root
    - If it's greater
        - Check to see if there is a node to the right
            - If there is, move that node and repeat these steps
            - If there is not, add that node as the right property
    - If if less
        - Check to see of there is a node to the left
        - If there is, move that node and repeat these steps
        - If there is not, add that node as the right property


Finding a Node in a BST Pseudocode:
- Starting at the root
- Check if there is a root, if not - we're done searching!
- If there is, check if the value of the new node is the value we are looking for. If we found it, we're done!
- If not, check to see if the value < or > value of the root
- If it's greater
    - Check to see if there is a node to the right
        - If there is, move to that node and repeat these steps
        - If there is not, we're done searching!
- If it's less
    - Check to see if there is a node to the left
        - If there is, move to that node and repeat these steps
        - If there is not, we're done searching!


 */

class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}


class BST {
    constructor() {
        this.root = null
    }

    // Average: O(log(n)) time | O(1) space
    // Worst: O(n) time | O(1) space
    insert(val) {
        let newNode = new Node(val)
        if (!this.root) {
            this.root = newNode
        } else {
            let current = this.root
            while (true) {
                if (val === current.val) return undefined

                if (val < current.val) {
                    if (!current.left) {
                       current.left = newNode
                       return this
                    }
                    current = current.left
                } else {
                    if (!current.right) {
                        current.right = newNode
                        return this
                    }
                    current = current.right
                }
            }
        }
    }

    // Average: O(log(n)) time | O(1) space
    // Worst: O(n) time | O(1) space
    find(val) {
        if (!this.root) return false
        let current = this.root
        let found = false
        while (current && !found) {
            if (val === current.val) found = true
            else if (val < current.val) current = current.left
            else current = current.right
        }
        return found ? current : false
    }

    // Average: O(log(n)) time | O(1) space
    // Worst: O(n) time | O(1) space
    remove(val) {
        if (!this.root) return
        let current = this.root
        let parent
        while (current) {
            if (val < current.val) {
                parent = current
                current = current.left
            } else if (val > current.val) {
                parent = current
                current = current.right
            } else {
                if (current.left && current.right) {
                    current.val = this._getMinValue()
                    this.remove(current.val)
                } else if (!parent) {
                    if (current.left) {
                        current.val = current.left.val
                        current.right = current.left.right
                        current.left = current.left.left
                    } else if (current.right) {
                        current.val = current.right.val
                        current.right = current.right.right
                        current.left = current.right.left
                    } else {
                        current.val = null
                    }
                } else if (parent.left === current) parent.left = current.left ? current.left : current.right
                 else if (parent.right === current) parent.right = current.left ? current.left : current.right
                break
            }
        }

        return this
    }

    _getMinValue() {
        let current = this.root
        while (current.left) current = current.left
        return current.val
    }
}


let tree = new BST()
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)
tree.insert(10)
console.log(tree)
console.log(tree.find(16))
tree.remove(13)
console.log(tree)


export {BST}
