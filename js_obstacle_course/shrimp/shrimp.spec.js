'use strict';
const Shrimp = require('./shrimp');

describe('Shrimp()', () => {

  it('creates a shrimp', () => {
    const shrimp = new Shrimp({});
    expect(Shrimp.prototype.isPrototypeOf(shrimp)).toEqual(true);
    expect(typeof shrimp).toEqual('object');
  });

  xit('creates a shrimp with a width and a height', () => {
    const options = { width: 5, height: 2 }
    const shrimp = new Shrimp(options);

    expect(shrimp.width).toEqual(shrimp.width);
    expect(shrimp.height).toEqual(shrimp.height);
  });

  xit('sets the max speed of the shrimp using its width and height', () => {
    // Note: the maxSpeed is calculated by multiplying the width and the height
    // and raising that value to the second power.
    const options = { width: 5, height: 2 }
    const shrimp = new Shrimp(options);

    expect(shrimp.maxSpeed).toEqual(100);
  });

  xit('sets the max speed of a large shrimp', () => {
    const options = { width: 10, height: 5 }
    const shrimp = new Shrimp(options);

    expect(shrimp.maxSpeed).toEqual(2500);
  });

  xit('can eat', () => {
    const options = { width: 5, height: 2 }
    const shrimp = new Shrimp(options);

    expect(shrimp.eat('algae')).toEqual('yum, algae!');
    expect(shrimp.eat('plankton')).toEqual('yum, plankton!');
  });

  xit('can only eat plankton or algae', () => {
    const options = { width: 5, height: 2 };
    const shrimp = new Shrimp(options);

    expect(shrimp.eat('burger')).toEqual('yuk, can\'t eat that!');
    expect(shrimp.eat('fries')).toEqual('yuk, can\'t eat that!');
    expect(shrimp.eat('cheese fritters')).toEqual('yuk, can\'t eat that!');
  });

  xit('becomes full after eating three times', () => {
    const options = { width: 5, height: 2 };
    const shrimp = new Shrimp(options);
    const foods = ['algae', 'algae', 'plankton'];

    foods.forEach((food) => {
      shrimp.eat(food);
    });

    expect(shrimp.isFull).toEqual(true);
  });

  xit('can\'t eat when it\'s full', () => {
    const options = { width: 5, height: 2 };
    const shrimp = new Shrimp(options);
    const foods = ['algae', 'algae', 'plankton'];

    foods.forEach((food) => {
      shrimp.eat(food);
    });

    expect(shrimp.isFull).toEqual(true);
    expect(shrimp.eat('algae')).toEqual('I love algae but am too full too eat!');
  });

  xit('is not full if it swims', () => {
    const options = { width: 5, height: 2 };
    const shrimp = new Shrimp(options);
    const foods = ['algae', 'algae', 'plankton'];

    foods.forEach((food) => {
      shrimp.eat(food);
    });

    expect(shrimp.isFull).toEqual(true);

    shrimp.swim();

    expect(shrimp.isFull).toEqual(false);
  });

});
