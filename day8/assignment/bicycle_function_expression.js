"use strict";
const bicycleModule = function () {
  const createBicyclePrototype = function () {
    const obj = {
      speed: 0
    }

    obj.applyBrake = function (decreaseValue) {
      obj.speed -= decreaseValue;
    }
    obj.speedup = function (increaseValue) {
      obj.speed += increaseValue;
    }
    return obj;
  }

  const createMountainBikePrototype = function (prototype) {
    const obj = Object.create(prototype, {
      gear: {value: 1, writable: true},
    });
    obj.setGear = (gear) => {
      obj.gear = gear;
    }
    return obj;
  }

  const start = function () {
    const bicyclePrototype = createBicyclePrototype();

    console.log(bicyclePrototype);
    console.log(bicyclePrototype.speed);
    bicyclePrototype.speedup(10);
    console.log(bicyclePrototype.speed);
    bicyclePrototype.applyBrake(5);
    console.log(bicyclePrototype.speed);
    const mountainBikePrototype = createMountainBikePrototype(bicyclePrototype);
    console.log(mountainBikePrototype);
    console.log(mountainBikePrototype.speed);
    console.log(mountainBikePrototype.gear);
    mountainBikePrototype.speedup(6);
    console.log(mountainBikePrototype.speed);
    mountainBikePrototype.applyBrake(3);
    mountainBikePrototype.setGear(3);
    console.log(mountainBikePrototype.gear);
  }

  return {createBicyclePrototype, createMountainBikePrototype, start};
}();

bicycleModule.start();