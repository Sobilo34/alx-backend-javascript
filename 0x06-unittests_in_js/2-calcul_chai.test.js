// 2-calcul.test.js

const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('should return 6 when inputs are 1.4 and 4.5', () => {
    // test for int and int
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });

  it('should return -4 when inputs are 1.4 and 4.5', () => {
    // test for int and float
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });

  it('should return 0.2 when inputs are 1.4 and 4.5', () => {
    // test for float and float
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });

  it("should return 'Error' when inputs are 1.4 and 0", () => {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });

});
