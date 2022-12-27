let arr = [3, 9, 90, 80]

let max = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i]
}

console.log(max)

let res = arr.reduce((acc, item, index) => {
    if (acc < item) {
        return item
    }
    else {
        return acc;
    }
})

console.log(res)

// let res2 = arr.reduce((acc, item) => (acc < item ? acc = item) )

// console.log({ res2 })