"use strict";
window.onload = function () {
  let startBtn = document.getElementById("createBtn");
  let accountList = [];
  startBtn.onclick = function () {
    let account = AccountMaker.createNewAccount({
      name: document.getElementById("accountName").value,
      balance: document.getElementById("amount").value
    });
    accountList.push(account);
    document.getElementById("viewer").value = accountList.map(p=>p.display()).reduce((p, c) => {
      return p += `\n${c}`;
    });
  }
}
