const { expect } = require('chai');
const fn = require('../src/server');

describe('test test', () => {
  it('it 1', () => {
    const expected = 'Yaharu!';
    const resp = fn();

    expect(expected).to.equal(resp);
  });
});
