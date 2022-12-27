//знайти вагу усіх речей, ціна яких більше 80 і кількість меньше 7


//-----------------------------------------------------------
// const food = [
//     { name: " Pasta", weight: 350, price: 90, quantity: 8 },
//     { name: " Pena", weight: 200, price: 100, quantity: 4 },
//     { name: " Salat", weight: 100, price: 20, quantity: 5 },
//     { name: " Woter", weight: 30, price: 10, quantity: 3 },
// ];

// function getWeightOfThing(arrFood) {
//     let filterFood = arrFood.filter((a) => a.weight > 80 && a.quantity < 7)
//     let resultReduce = filterFood.reduce((acc, item) => acc += item.weight * item.quantity
//         , 0)
//     return resultReduce;
// }

// console.log(getWeightOfThing(food));
//-----------------------------------------------------------------
// const food = [
//     { name: " Pasta", weight: 350, price: 90, quantity: 8 },
//     { name: " Pena", weight: 200, price: 100, quantity: 4 },
//     { name: " Salat", weight: 100, price: 20, quantity: 5 },
//     { name: " Woter", weight: 30, price: 10, quantity: 3 },
// ];

// function getWeightOfThing(arrFood) {
//     let acc = 0;
//     for (let i = 0; i < arrFood.length; i++) {
//         if (arrFood[i].weight > 80 && arrFood[i].quantity < 7) {
//             acc += arrFood[i].weight * arrFood[i].quantity;
//         }
//     }
//     return acc;
// }
// console.log(getWeightOfThing(food));
//-----------------------------------------------------------------
