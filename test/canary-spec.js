const chai = require('chai');

chai.should();

describe('Canary test', () => {
  it('five should equal five', () => {
    const five = 5;

    five.should.equal(5);
    five.should.be.a('number');
  })
})
