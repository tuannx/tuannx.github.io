"use strict";
window.onload = init;
let settings = {
  stopButton: null,
  DEFAULT_SPEED: 250,
  TURBO_SPEED: 50,
  speed: 250,
  intervalId: null,
  animationName: "Blank",
  size: "12pt",
  frameIndex: 0,
  frames: null,
  started: false,
  setStarted: function (started) {
    this.started = started;
    if (!this.started) {
      this.stopButton.disabled = true;
    } else {
      this.stopButton.disabled = false;
    }
  }
};

function init() {
  CUSTOM = "Bike";
  let startBtn = document.getElementById("startBtn");
  startBtn.onclick = function () {
    console.log("Start animation", settings);
    start();
  }

  settings.stopButton = document.getElementById("stopBtn");
  settings.stopButton.disabled = true;
  settings.stopButton.onclick = function () {
    console.log("Stop animation", settings);
    stop();
  }

  let animationSelect = document.getElementById("animations");
  animationSelect.onchange = function (event) {
    settings.animationName = event.target.value;
    console.log("Change animation", settings);
    onChangeAnimation();
  }

  let sizeSelect = document.getElementById("size");
  sizeSelect.onchange = function (event) {
    settings.size = event.target.value;
    console.log("Change size", settings);
    onChangeSize();
  }

  let toggleSpeedCheckbox = document.getElementById("speed");
  toggleSpeedCheckbox.onchange = function (event) {
    if (event.target.checked) {
      settings.speed = settings.TURBO_SPEED;
    } else {
      settings.speed = settings.DEFAULT_SPEED;
    }
    console.log("Toggle speed", settings);
    toggleSpeed();
  }
}

function start() {
  settings.frames = ANIMATIONS[settings.animationName] ? ANIMATIONS[settings.animationName].split("=====\n") : null;
  if (!settings.frames || settings.frames.length == 0) return;
  settings.intervalId = setInterval(function () {
    settings.setStarted(true);
    if (settings.frameIndex >= settings.frames.length) {
      settings.frameIndex = 0;
    }
    let viewer = document.getElementById("viewer");
    viewer.value = settings.frames[settings.frameIndex++];
  }, settings.speed);
}

function stop() {
  clearInterval(settings.intervalId);
  let viewer = document.getElementById("viewer");
  settings.frameIndex = 0;
  if (settings.frames) {
    viewer.value = settings.frames[settings.frameIndex];
  }
  settings.setStarted(false);
}

function onChangeAnimation() {
  stop();
  start();
}

function onChangeSize() {
  stop();
  let viewer = document.getElementById("viewer");
  viewer.style.fontSize = settings.size;
  start();
}

function toggleSpeed() {
  if (settings.started) {
    clearInterval(settings.intervalId);
    start();
  }
}