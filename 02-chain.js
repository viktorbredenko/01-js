//https://www.youtube.com/watch?v=HoE_ubN7III

// const str = new Array(10).fill(0).map((e, i) => i + 1)
// console.log(str)

// let arr = [4,6,2].map((e,i)=>e++)
// console.log(arr)

class Test {
    constructor(sum) {
        this.total = sum;

    }
    add(value) {
        this.total += value;
        return this
    }
    sub(value) {
        this.total -= value;
        return this
    }
    print() {
        console.log(this)
        return this
    }

}

const obj = new Test(15);

obj.add(8).sub(1).print();

console.log(obj)


const Test2 = function () {


    let total = 0;


    add(value) {
        total += value;
        return this
    }
    sub(value) {
        total -= value;
        return this
    }
    print() {
        console.log(total)
        return this
    }

}
