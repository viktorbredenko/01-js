//https://www.youtube.com/watch?v=kOTD3gndink

const START = Date.now();

function someFn() {
    console.log('time', Date.now() - START)
    console.log('args', arguments)

}

Function.prototype.delay = function (ms) {
    return (...args) => {
        setTimeout(() => {
            //console.log(this)
            this.call(this, args)
        }, ms)
    }

}

const f = someFn.delay(200, 800)

f('arg1', 'arg2', 1, 2)