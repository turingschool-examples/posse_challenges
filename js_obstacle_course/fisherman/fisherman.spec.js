'use strict';
const Fisherman = require('./fisherman');

describe('Fisherman()', () => {

  it('creates a fisherman', () => {
    const fisherman = new Fisherman();
    expect(typeof fisherman).toEqual('object');
  });

  it('could have boats, but has no boats at the moment', () => {
    const fisherman = new Fisherman();

    expect(typeof fisherman.boats).toEqual('object');
    expect(fisherman.boats.length).toEqual(0);
  });

  it('earns money by catching fish', () => {
    const fisherman = new Fisherman();
    expect(fisherman.funds).toEqual(0);

    fisherman.fish();
    expect(fisherman.funds).toEqual(5);
  });

  it('sometimes the fisherman fishes without any results', () => {
    const fisherman = new Fisherman();
    expect(fisherman.funds).toEqual(0);

    for (var i = 0; i < 3; i++) { fisherman.fish(); }
    expect(fisherman.funds).toEqual(10);

    fisherman.fish();
    expect(fisherman.funds).toEqual(15);
  });

  it('sometimes the fisherman gets more fish than expected', () => {
    const fisherman = new Fisherman();
    expect(fisherman.funds).toEqual(0);

    for (var i = 0; i < 4; i++) { fisherman.fish(); }
    expect(fisherman.funds).toEqual(15);

    fisherman.fish();
    expect(fisherman.funds).toEqual(25);

    fisherman.fish();
    expect(fisherman.funds).toEqual(25);

    fisherman.fish();
    expect(fisherman.funds).toEqual(30);
  });

  it('the fisherman can buy a boat with the funds', () => {
    const fisherman = new Fisherman();
    fisherman.funds = 30;

    expect(fisherman.boats.length).toEqual(0);
    expect(typeof fisherman.boats).toEqual('object');

    fisherman.buyBoat();

    expect(fisherman.boats.length).toEqual(1);
    expect(fisherman.funds).toEqual(0);

    expect(typeof fisherman.boats[0]).toEqual('object');
    expect(fisherman.boats[0].type).toEqual('Fishing Vessel');
  });

  it('the fisherman earns funds faster with a boat', () => {
    const fisherman = new Fisherman();
    fisherman.boats.push({ type: 'Fishing Vessel' });

    fisherman.fish();
    expect(fisherman.funds).toEqual(10);

    fisherman.fish().fish();
    expect(fisherman.funds).toEqual(20);

    fisherman.fish().fish().fish();
    expect(fisherman.funds).toEqual(50);
  });

  it('the fisherman earns funds faster with several boats', () => {
    const fisherman = new Fisherman();
    fisherman.boats.push({ type: 'Fishing Vessel' }, { type: 'Fishing Vessel' });

    fisherman.fish();
    expect(fisherman.funds).toEqual(15);

    fisherman.fish().fish();
    expect(fisherman.funds).toEqual(30);

    fisherman.fish().fish();
    expect(fisherman.funds).toEqual(75);
  });
});