# bitwise-shuffle
Bitwise shuffle for two-way hashing
## Use (Deno)
```ts
import {shuffle, unshuffle, random} from "https://raw.githubusercontent.com/gnlow/bitwise-shuffle/master/mod.ts"

const key = [2, 0, 1, 3]
const hash = shuffle(key)
console.log(hash(0b1010)) // 6 = 0110(2)
/* 
input: 10 = 1010(2)
key:        2013
            \//|
            //\|
            ||||
output: 6 = 0110(2)
*/

const unhash = unshuffle(key)
console.log(unhash(0b0110)) // 10 = 1010(2)

console.log(random(4)) // (ex) [ 1, 0, 2, 3 ]
```
