'use strict';

const text = function (s) {
    this.value = s;
};

text.prototype.line = function (a) {
    this.value += '\n' + a;
    return this;
};

text.prototype.toString = function () {
    return this.value;
};

// Usage

const txt = new text('line1')
// .line('line2')
// .line('line3')
// .line('line4');

console.log(txt.line);

