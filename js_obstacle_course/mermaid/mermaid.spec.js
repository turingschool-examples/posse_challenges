'use strict';
const Mermaid = require('./mermaid');

describe('Mermaid()', () => {

  it('creates a mermaid', () => {
    const mermaid = new Mermaid({});
    expect(typeof mermaid).toEqual('object');
  });

  it('mermaids have a name and a characteristic', () => {
    const options = { name: 'Valerie', characteristic: 'Brave' };
    const mermaid = new Mermaid(options);

    expect(mermaid.name).toEqual(options.name);
    expect(mermaid.characteristic).toEqual(options.characteristic);
  });

  it('mermaids are considered trouble makers if the make trouble', () => {
    const options = { name: 'Valerie', characteristic: 'Brave' };
    const mermaid = new Mermaid(options);
    expect(mermaid.isTroubleMaker).toEqual(false);

    mermaid.makeTrouble();
    expect(mermaid.isTroubleMaker).toEqual(true);
  });

  it('mermaids aren\'t considered trouble makers if they behave well', () => {
    const options = { name: 'Valerie', characteristic: 'Brave' };
    const mermaid = new Mermaid(options);

    mermaid.makeTrouble();
    expect(mermaid.isTroubleMaker).toEqual(true);

    mermaid.behave();
    expect(mermaid.isTroubleMaker).toEqual(false);
  });

});
