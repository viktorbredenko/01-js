let arrey = [1, 2, 3, -17, 8, 4, 2, -3, 34, 67, 40, 23];
//arr[10] = 10;

function isPrime(num) {
    if (num <= 1)
        return false;
    else if (num === 2)
        return true;
    else {
        for (let i = 2; i < num; i++)
            if (num % i === 0)
                return false;
        return true;
    }
}


Array.prototype.filter2 = function (callback, thisArg) {

    if (this == null) {
        throw new Error("Arrey_undef");
    }
    if (typeof callback !== 'function') {
        throw new Error('Callback is not a function')
    }

    let context = this;
    let o = Object(this);

    if (arguments.length > 1) {
        context = thisArg;
    }




    let len = o.length;
    let res = [];

    for (let i = 1; i < len; i++) {

        if (i in o) {
            callback(this[i])
            res.push(this[i]);
        }
    }



    return res;
}

let prime = arrey.filter2(isPrime)

console.log(prime)

// let users = [
//     { id: 1, name: "Петя" },
//     { id: 2, name: "Петя" },
//     { id: 3, name: "Маша" }
// ];

// // возвращает массив, состоящий из двух первых пользователей
// let someUsers = users.filter(item => item.name == "Петя");

// console.log(someUsers); // 2