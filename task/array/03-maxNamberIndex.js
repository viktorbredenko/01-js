let arr = [3, 9, 90, 80]

let max = arr[0];
let maxIndex;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
        maxIndex = i;
    }
}

console.log(maxIndex)

let maxInd = arr.reduce((acc, item, index) => {
    if (acc < item) {

    }
})