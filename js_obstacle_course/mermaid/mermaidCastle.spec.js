'use strict';
const Mermaid = require('./mermaid');
const MermaidCastle = require('./mermaidCastle');

describe('MermaidCastle()', () => {

  it('is empty when it\'s created', () => {
    const mermaidCastle = new MermaidCastle();
    expect(typeof mermaidCastle).toEqual('object');
    expect(mermaidCastle.tenants.length).toEqual(0);
  });

  it('mermaids can move in', () => {
    const options = { name: 'Valerie', characteristic: 'Brave' };
    const mermaidCastle = new MermaidCastle();
    const mermaid = new Mermaid(options);

    mermaidCastle.add(mermaid);

    expect(mermaidCastle.tenants.length).toEqual(1);
  });

  it('can evict mermaids that aren\'t behaving well', () => {
    const options1 = { name: 'Valerie', characteristic: 'Brave' };
    const options2 = { name: 'Mick', characteristic: 'Resourceful' };

    const mermaidCastle = new MermaidCastle();
    const mermaid1 = new Mermaid(options1);
    const mermaid2 = new Mermaid(options2);

    expect(mermaid1.isTroubleMaker).toEqual(false);

    mermaidCastle.add(mermaid1);
    mermaidCastle.add(mermaid2);
    mermaid1.makeTrouble();

    expect(mermaid1.isTroubleMaker).toEqual(true);
    expect(mermaidCastle.tenants.length).toEqual(2);

    mermaidCastle.filterMermaids();
    expect(mermaidCastle.tenants.length).toEqual(1);
  });

  it('can find mermaids by name', () => {
    const options1 = { name: 'Valerie', characteristic: 'Brave' };
    const options2 = { name: 'Mick', characteristic: 'Resourceful' };

    const mermaidCastle = new MermaidCastle();
    const mermaid1 = new Mermaid(options1);
    const mermaid2 = new Mermaid(options2);

    mermaidCastle.add(mermaid1);
    mermaidCastle.add(mermaid2);

    expect(mermaidCastle.findByName(options2.name)).toEqual(mermaid2);
  });

  it('can find mermaids by characteristic', () => {
    const options1 = { name: 'Valerie', characteristic: 'Brave' };
    const options2 = { name: 'Mick', characteristic: 'Resourceful' };

    const mermaidCastle = new MermaidCastle();
    const mermaid1 = new Mermaid(options1);
    const mermaid2 = new Mermaid(options2);

    mermaidCastle.add(mermaid1);
    mermaidCastle.add(mermaid2);

    expect(mermaidCastle.findByCharacteristic(options2.characteristic)).toEqual(mermaid2);
  });

  it('can\'t have tenants with duplicate names', () => {
    const options1 = { name: 'Valerie', characteristic: 'Brave' };
    const options2 = { name: 'Valerie', characteristic: 'Resourceful' };

    const mermaidCastle = new MermaidCastle();
    const mermaid1 = new Mermaid(options1);
    const mermaid2 = new Mermaid(options2);

    mermaidCastle.add(mermaid1);
    expect(mermaidCastle.tenants.length).toEqual(1);

    expect(mermaidCastle.add(mermaid2)).toEqual('Your name is already taken!');
  });

});