"use strict";
const makeAccount = function ({name: n, balance: b}) {
  let name = n;
  let balance = b;

  return {
    name: () => {
      return name;
    },
    balance: () => {
      return balance;
    },
    display: () => {
      return `Account name: ${name}, Balance: ${balance}`;
    },
  }
};
const AccountMaker = (function () {
  return { // three public functions are closures
    createNewAccount: function ({name, balance}) {
      return makeAccount({name, balance});
    },
  }
})();

