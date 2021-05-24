/*

What is a hash table?
- Hash tables are used to store key-value pairs
- They are like arrays, but the keys are not ordered
- Unlike arrays, has tables are fast for all of the following operations: finding, adding, and removing!


How would we implement our own version?

Image we want to store some colors...
We could just use a list:
['ff69b4', 'ff4500', '00ffff']

It would be nice instead of using indices to access the colors, we could use more human-readable keys
pink        ==> ff69b4
orange-red  ==> ff4500
cyan        ==> 00ffff


To implement a hash table, we'll be using an array
In order to look up values by key, we need a way to convert keys into a valid array indices
A function that performs this task is called a hash function

What makes a good hash? (not a cryptographically secure one)
1. Fast (constant time)
2. Doesn't cluster outputs at specific indices, but distributes uniformly
3. Deterministic (same input yields same output)

 */