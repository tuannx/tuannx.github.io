"use strict";
const bicycleClassModule = function () {
  class Bicycle {
    constructor() {
      this.speed = 0;
    }

    applyBrake(decreaseValue) {
      this.speed -= decreaseValue;
    }

    speedup(increaseValue) {
      this.speed += increaseValue;
    }
  }

  class MountainBike extends Bicycle {
    constructor() {
      super();
      this.gear = 1;
    }

    setGear(gear) {
      this.gear = gear;
    }
  }

  const start = function () {
    const bicyclePrototype = new Bicycle();

    console.log(bicyclePrototype);
    console.log(bicyclePrototype.speed);
    bicyclePrototype.speedup(10);
    console.log(bicyclePrototype.speed);
    bicyclePrototype.applyBrake(5);
    console.log(bicyclePrototype.speed);
    const mountainBikePrototype = new MountainBike(bicyclePrototype);
    console.log(mountainBikePrototype);
    console.log(mountainBikePrototype.speed);
    console.log(mountainBikePrototype.gear);
    mountainBikePrototype.speedup(6);
    console.log(mountainBikePrototype.speed);
    mountainBikePrototype.applyBrake(3);
    mountainBikePrototype.setGear(3);
    console.log(mountainBikePrototype.gear);
  }

  return {Bicycle, MountainBike, start};
}();

bicycleClassModule.start();