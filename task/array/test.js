//let arr = [[1, 2], 4, 5, [7, 8]]
//let arr = [[1, 2], 2, 9, [7, 8]]
//let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         sum += arr[i][j]
//     }
// }

// for (let i of arr) {
//     for (let j of i) {
//         console.log(j)
//     }
// }

//console.log(sum)
// let studentsData = [['Андрей', 24], ['Настя', 23],];
// studentsData[1][1]// = 'привет';

// console.log(studentsData[1][1]);


// let key = 4;

// arr[key] = 8;
// console.log(arr)

const arr1 = [1, 2]
const arr2 = [...arr1]
arr1[2] = 10;

console.log(arr2)

const obj1 = {
    a: 1,
}

const obj2 = { ...obj1 }
obj1.b = 10;
const obj3 = obj1;
console.log(obj3 === obj1)

const myObj = {
    one: 1,
    two: 2,
    three: 3,
    b: {
        a: 3,
        x: 5
    }
}

const newObj = JSON.parse(JSON.stringify(myObj))

//const newObj = JSON.parse(stringify(myObj))
myObj.b.x = 20;

console.log(newObj)