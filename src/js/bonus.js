import {it, expect} from "./test_lib";

// Constructors
// Only add code to *THIS* section!

function Human () {
   this.alertness = 0.01;
   this.hasCoffee = false;
   this.needsCoffee = true;
}

function Coffee () {
  this.full = true;
}

Human.prototype.buy = function (type) {
  this.coffee = type;
  this.hasCoffee = true;
  this.needsCoffee = false;
};

Human.prototype.drink = function () {
  this.alertness += 0.35;
  this.coffee.full = false;
  this.coffee.empty = false;

  if(this.alertness > 0.9) {
    this.coffee.empty = true;
  }
};






// Do not ADD or MODIFY code below this line :D

it("should be sleepy at first", function () {
  let marie = new Human("Marie");
  expect(marie.alertness < 0.1).toBe(true);
});

it("needs coffee to wake up", function () {
  let artem = new Human("Artem");
  expect(artem.hasCoffee).toBe(false);
  expect(artem.needsCoffee).toBe(true);
});

it("can drink coffee to become more alive", function () {
  let kurt = new Human("Kurt");
  let omf = new Coffee("Orange Mocha Frappucino");
  expect(omf.full).toBe(true);

  kurt.buy(omf);
  kurt.drink();
  expect(kurt.alertness > 0.3 && kurt.alertness < 0.4).toBe(true);
  expect(omf.full).toBe(false);

  expect(omf.empty).toBe(false);
});

it("has coffee after buying it", function () {
  let tyler = new Human("Tyler");
  let cuban_blend = new Coffee("Fancy Cuban Blend");
  expect(tyler.hasCoffee).toBe(false);
  tyler.buy(cuban_blend);
  expect(tyler.hasCoffee).toBe(true);
});

it("can drink all the coffee", function () {
  let cory = new Human("Cory");
  let tsmf = new Coffee("Triple Shot Mocha Frappucino");
  cory.buy(tsmf);
  for(let i = 0; i < 3; i++) {
    cory.drink();
  }
  expect(tsmf.empty).toBe(true);
  expect(cory.alertness > 0.9).toBe(true);
});
