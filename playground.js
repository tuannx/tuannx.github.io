"use strict";
const calculator = {
  a: null,
  b: null,
  read: () => {
    this.a = prompt("get input");
    this.b = prompt("get input")
  },
  sum: () => {
    return this.a + this.b
  },
  mul: () => {
    return this.a * this.b
  },
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
