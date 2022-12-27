let arr = [3, 5, 6, 7, 9, 0];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i]
}

console.log(sum)
//---------------------

let res = arr.reduce((acc, item, index) => {
    console.log({ acc, item, index })
}, [])
console.log(res)