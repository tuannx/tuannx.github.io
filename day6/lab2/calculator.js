window.onload = () => {
  log = console.log;
  log("Tip calculator program");
  init();
}

function init() {
  let goButton = document.getElementById("btn");
  goButton.onclick = calcTip;
  let clearBtn = document.getElementById("clearBtn");
  clearBtn.onclick = clearForm;
}

function calcTip() {
  let subtotalElem = document.getElementById("subtotal");
  let tipElem = document.getElementById("tip");
  let totalElem = document.getElementById('total');
  let subtotal = parseFloat(subtotalElem.value);
  let tip = parseFloat(tipElem.value);
  let total = subtotal + subtotal * tip / 100;
  totalElem.innerHTML = '$' + total;
}

function clearForm() {
  document.getElementById("subtotal").value = "";
  document.getElementById("tip").value = "";
  document.getElementById('total').innerHTML = "$0.00";
}