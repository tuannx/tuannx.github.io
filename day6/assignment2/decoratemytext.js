window.onload = init;

function init() {
  let biggerBtn = document.getElementById("biggerBtn");
  biggerBtn.onclick = function () {
    let area = document.getElementById("area");
    let style = window.getComputedStyle(area);
    let intervalId = setInterval(function () {
      let currentFontSize = parseInt(style.fontSize);
      if (currentFontSize < 24) {
        area.style.fontSize = currentFontSize + 2 + "px";
      } else {
        clearInterval(intervalId);
      }
    }, 500);
  }
  let bling = document.getElementById("bling");
  bling.onchange = function (event) {
    if (event.target.checked) {
      document.getElementById("area").style.fontWeight = "bold";
      document.getElementById("area").style.color = "green";
      document.getElementById("area").style.textDecoration = "underline";
    } else {
      document.getElementById("area").style.fontWeight = "";
      document.getElementById("area").style.color = "";
      document.getElementById("area").style.textDecoration = "";
    }
  }
}