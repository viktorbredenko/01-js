// function f(...arg) {
//     console.log(arg)
// }

// f(1, 2)

// var user = {
//     firstName: "Василий",
//     surname: "Петров",
//     patronym: "Иванович"
// };


// console.log(user['firstName'])

function max(a, b, c) {
    return Math.max.call(this, arguments)
}

console.log(max(1, 3, 5))