'use strict'
const Whale = require('./whale');

describe('Whale()', () => {

  it('creates a whale', () => {
    const whale = new Whale({});
    expect(typeof whale).toEqual('object');
  });

  it('creates a whale with a name, location and breed', () => {
    const options = { name: 'Willy',
                      location: 'The Pacific',
                      breed: 'California Grey Whale' };
    const whale = new Whale(options);

    expect(whale.name).toEqual(options.name);
    expect(whale.location).toEqual(options.location);
    expect(whale.breed).toEqual(options.breed);
  });

  it('introduces itself', () => {
    const options = { name: 'Willy',
                      location: 'The Pacific',
                      breed: 'California Grey Whale' };
    const whale = new Whale(options);
    const intro = `Pleasure to meet you, my name is ${options.name} and I'm from ${options.location}`

    expect(whale.introduction).toEqual(intro);
  });

  it('starts out with no children', () => {
    const options = { name: 'Willy',
                      location: 'The Pacific',
                      breed: 'California Grey Whale' };
    const whale = new Whale(options);

    expect(whale.children.length).toEqual(0);
  });

  it('gets a child when it meets another whale', () => {
    const options = { name: 'Willy',
                      location: 'The Pacific',
                      breed: 'California Grey Whale' };
    const whale = new Whale(options);

    whale.meetsWhale({});

    expect(whale.children.length).toEqual(1);
  });

  it('a child has a different name but same location and breed as its parent', () => {
    const options = { name: 'Willy',
                      location: 'The Pacific',
                      breed: 'California Grey Whale' };
    const whale = new Whale(options);
    const babyWhaleOptions = { name: 'Sally', location: options.location, breed: options.breed };

    whale.meetsWhale(babyWhaleOptions);

    expect(whale.children.length).toEqual(1);
    expect(whale.children[0].name).toNotEqual(options.name);
    expect(typeof whale.children[0].name).toEqual('string');
    expect(whale.children[0].location).toEqual(options.location);
    expect(whale.children[0].breed).toEqual(options.breed);
  });

  it('can update it\'s location', () => {
    const options = { name: 'Willy',
                      location: 'The Pacific',
                      breed: 'California Grey Whale' };
    const whale = new Whale(options);
    const newLocation = 'The South Pacific';

    expect(whale.location).toEqual(options.location);

    whale.location = newLocation;
    expect(whale.location).toEqual(newLocation);
  });

  it('can move to other places', () => {
    const options = { name: 'Willy',
                      location: 'The Pacific',
                      breed: 'California Grey Whale' };
    const whale = new Whale(options);
    const newLocation = 'The Atlantic';

    whale.moveTo(newLocation);
    expect(whale.location).toEqual(newLocation);
  });

  it('can swim without getting tired', () => {
    const options = { name: 'Willy',
                      location: 'The Pacific',
                      breed: 'California Grey Whale' };
    const whale = new Whale(options);

    whale.swim();
    expect(whale.isTired).toEqual(false);
  });

  it('gets tired after swimming for a while', () => {
    const options = { name: 'Willy',
                      location: 'The Pacific',
                      breed: 'California Grey Whale' };
    const whale = new Whale(options);

    whale.swim();
    whale.swim();
    whale.swim();

    expect(whale.isTired).toEqual(false);

    whale.swim();

    expect(whale.isTired).toEqual(true);
  });
});