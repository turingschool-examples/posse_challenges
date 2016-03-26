'use strict';

const Dolphin = require('./dolphin');

describe('Dolphin()', () => {

  it('creates a dolphin', () => {
    const dolphin = new Dolphin();
    expect(typeof dolphin).toEqual('object');
  });

  xit('gets happier when it jumps', () => {
    const dolphin = new Dolphin();
    expect(dolphin.happiness).toEqual(0);

    dolphin.jump()
    expect(dolphin.happiness).toEqual(10);
  });

  xit('gets happier when it does flips', () => {
    const dolphin = new Dolphin();
    expect(dolphin.happiness).toEqual(0);

    dolphin.flip()
    expect(dolphin.happiness).toEqual(15);
  });

  xit('increases its happiness score by jumping and flipping', () => {
    const dolphin = new Dolphin();

    dolphin.flip().jump().flip();
    expect(dolphin.happiness).toEqual(40);
  });

  xit('also gets tired when it jumps and flips', () => {
    const dolphin = new Dolphin();
    expect(dolphin.energy).toEqual(100);

    dolphin.jump();
    expect(dolphin.energy).toEqual(95)

    dolphin.flip();
    expect(dolphin.energy).toEqual(87);

    dolphin.flip().jump().jump();
    expect(dolphin.energy).toEqual(69);
  });

  xit('gets more tired by jumping after a few jumps', () => {
    const dolphin = new Dolphin();

    for (var i = 0; i < 4; i++) { dolphin.jump() };
    expect(dolphin.energy).toEqual(80);

    dolphin.jump();
    expect(dolphin.energy).toEqual(70);
  });

  xit('gets more tired by flipping after a few flips', () => {
    const dolphin = new Dolphin();

    for (var i = 0; i < 4; i++) { dolphin.flip() };
    expect(dolphin.energy).toEqual(68);

    dolphin.flip();
    expect(dolphin.energy).toEqual(53);
  });

  xit('gets super tired after many jumps and flips', () => {
    const dolphin = new Dolphin();
    for (var i = 0; i < 5; i++) { dolphin.flip().jump() };
    expect(dolphin.energy).toEqual(23);
  });

  xit('it will jump if it has some energy left', () => {
    const dolphin = new Dolphin();
    expect(dolphin.happiness).toEqual(0);
    dolphin.energy = 5;

    dolphin.jump();

    expect(dolphin.energy).toEqual(0);
    expect(dolphin.happiness).toEqual(10);
  });

  xit('it will flip if it has some energy left', () => {
    const dolphin = new Dolphin();
    expect(dolphin.happiness).toEqual(0);
    dolphin.energy = 8;

    dolphin.flip();

    expect(dolphin.energy).toEqual(0);
    expect(dolphin.happiness).toEqual(15);
  });

  xit('won\'t jump or flip if it\'s too tired', () => {
    const dolphin = new Dolphin();
    expect(dolphin.happiness).toEqual(0);
    dolphin.energy = 1;

    dolphin.jump();

    expect(dolphin.energy).toEqual(1);
    expect(dolphin.happiness).toEqual(0);

    dolphin.flip();

    expect(dolphin.energy).toEqual(1);
    expect(dolphin.happiness).toEqual(0);
  });

  xit('won\'t jump if it\'s too tired.. seriously', () => {
    const dolphin = new Dolphin();
    for (var i = 0; i < 12; i++) { dolphin.jump() };

    expect(dolphin.energy).toEqual(0);

    dolphin.jump();
    expect(dolphin.energy).toEqual(0);
  });

  xit('won\'t flip if it\'s too tired.. seriously', () => {
    const dolphin = new Dolphin();
    for (var i = 0; i < 8; i++) { dolphin.flip() };

    expect(dolphin.energy).toEqual(8);

    dolphin.flip();
    expect(dolphin.energy).toEqual(8);
  });

  xit('builds up its energy level by resting', () => {
    const dolphin = new Dolphin();
    dolphin.energy = 0;

    dolphin.rest();

    expect(dolphin.energy).toEqual(20);
  });

  xit('gets tired by jumping and flipping, but can play more after resting', () => {
    const dolphin = new Dolphin();
    for (var i = 0; i < 6; i++) { dolphin.flip().jump(); };
    expect(dolphin.energy).toEqual(8);

    dolphin.flip().jump();
    expect(dolphin.energy).toEqual(8);

    dolphin.rest().rest();
    expect(dolphin.energy).toEqual(48);

    dolphin.flip().jump();
    expect(dolphin.energy).toEqual(23);
  });

});
