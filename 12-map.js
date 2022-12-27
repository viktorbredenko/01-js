let arr = [1, 2, 3];
arr[10] = 10;

Array.prototype.forEach2 = function (callback) {

    if (this == null) {
        throw new Error("Arrey_undef");
    }
    if (typeof callback !== 'function') {
        throw new Error('Callback is not a function')
    }

    let obj = Object(this);
    let len = obj.length;

    let i = 0;

    while (i < len) {

        if (i in this) {
            callback(this[i], i)
        }

        i++;
    }

}
arr.forEach2((item, index) => {
    console.log({ item, index });

})