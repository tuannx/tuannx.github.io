"use strict";
const bicycleConstructorFunctionModule = function () {
  function CreateBicyclePrototype() {
    this.speed = 0;
  }

  CreateBicyclePrototype.prototype.applyBrake = function (decreaseValue) {
    this.speed -= decreaseValue;
  }
  CreateBicyclePrototype.prototype.speedup = function (increaseValue) {
    this.speed += increaseValue;
  }

  function CreateMountainBikePrototype(prototype) {
    this.__proto__ = prototype;
    this.gear = 1;
    this.setGear = (gear) => {
      this.gear = gear;
    }
  }

  const start = function () {
    {
      const bicyclePrototype = new CreateBicyclePrototype();

      console.log(bicyclePrototype);
      console.log(bicyclePrototype.speed);
      bicyclePrototype.speedup(10);
      console.log(bicyclePrototype.speed);
      bicyclePrototype.applyBrake(5);
      console.log(bicyclePrototype.speed);
    }
    {
      const mountainBikePrototype = new CreateMountainBikePrototype(new CreateBicyclePrototype());
      console.log(mountainBikePrototype);
      console.log(mountainBikePrototype.speed);
      console.log(mountainBikePrototype.gear);
      mountainBikePrototype.speedup(6);
      console.log(mountainBikePrototype.speed);
      mountainBikePrototype.applyBrake(3);
      mountainBikePrototype.setGear(3);
      console.log(mountainBikePrototype.gear);
    }
  }

  return {CreateBicyclePrototype, CreateMountainBikePrototype, start};
}();

bicycleConstructorFunctionModule.start();