//0, 1, 1, 2, 3, 5, 8, 13
// f(n)=f(n-1)+f(n-2)

function fibonSort(num) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= num; i++) {
        [a, b] = [b, a + b];
        a
        b
    }
    return b;
}
console.log(fibonSort(5))

//------------------------------------------------
// function iterationFibonachi(n) {
//     if (n <= 0) {
//         return 0;
//     }
//     if (n <= 2) {
//         return 1;
//     }

//     let prev = 1;
//     let result = 1;

//     for (let i = 0; i < n - 2; i++) {
//         let tmp = result;
//         result += prev;
//         prev = tmp;
//     }
//     return result;
// }
// console.log(iterationFibonachi(7))
//-------------------------------------------------
// function fibonachi(num) {
//     const result = [0, 1];

//     for (let i = 2; i <= num; i++) {

//         const prevNum1 = result[i - 1]
//         const prevNum2 = result[i - 2]

//         result.push(prevNum1 + prevNum2)
//     }

//     return result[num]

// }
// console.log(fibonachi(7))

//---------------------------------------------------

// function fibonachi(n) {
//     if (n <= 0) {
//         return 0;
//     }
//     if (n <= 2) {
//         return 1;
//     }

//     console.log(n)

//     return  fibonachi(n - 1) + fibonachi(n - 2)
// }
// console.log(fibonachi(7))
//------------------------------------
