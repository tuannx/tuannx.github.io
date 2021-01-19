window.onload = () => {
  log = console.log;
  log("Alarm program");
  init();
}

function init() {
  let goButton = document.getElementById("go");
  goButton.onclick = function () {
    log("Go clicked");
    let minField = document.getElementById("min");
    let secField = document.getElementById("sec");
    let remainTime = parseInt(minField.value ? minField.value : "0") * 60 + parseInt(secField.value ? secField.value : "0");
    let intervalId = setInterval(() => {
      remainTime--;
      let min = Math.floor(remainTime / 60);
      let sec = remainTime % 60;
      log("Counting down interval: ",remainTime, min, sec);
      if (min <= 0)
        minField.value = "";
      else
        minField.value = String(min);
      secField.value = String(sec);
      if (sec <= 0 && min <= 0) {
        document.body.style.background = "red";
        setTimeout(function () {
          clearInterval(intervalId)
          document.body.style.background = "";
        }, 900);
      }
    }, 1000);
  }
}