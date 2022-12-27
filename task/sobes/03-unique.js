// Напишите функцию, которая определяет уникальны ли все символы в строке. Регистр должен учитываться: `‘a’` и `‘A’` разные символы.
// **Input**: String
// **Output**: Boolean

// function isUnique(string) {
//     for (let i = 0; i < string.length; i++) {

//         for (let j = 0; j < string.length; j++) {

//             if (string[i] === string[j] && i !== j) return false//console.log(string[i], string[j], '__', i, j)

//         }
//     }
//     return true
// }
//console.log(isUnique('ata'))
// console.log(isUnique('abcdef')) //  -> true
// console.log(isUnique('1234567')) // -> true
// console.log(isUnique('abcABC')) //  -> true
// console.log(isUnique('abcadef')) // -> false
//------------------------------------------------------------------

// function isUnique(string) {
//     for (let i = 0; i < string.length; i++) {

//         //if (string.lastIndexOf(string[i]) !== i) return false
//         if (string.indexOf(string[i]) !== i) return false

//     }
//     return true
// }
// //console.log(isUnique('ata'))
// console.log(isUnique('abcdeff')) //  -> true
// console.log(isUnique('1234567')) // -> true
// console.log(isUnique('abcABC')) //  -> true
// console.log(isUnique('abcadef')) // -> false
//--------------------------------------------------



let a = 10
let b = a

console.log(b - 5)
console.log(a)