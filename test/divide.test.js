import chai from "chai";
const assert = chai.assert;
import divide from '../COMP.SE.200-2021-2022-1/src/divide.js';

describe('divide', () => {
    var obj = { foo: 'bar' };

    it('Divide by zero does not crash', () => {
        assert.doesNotThrow(() => { divide(1, 0); }, Error);
    });
    it('Overflow does not crash', () => {
        assert.doesNotThrow(() => { divide(100, 10e-400); }, Error);
    });
    it('Underflow does not crash', () => {
        assert.doesNotThrow(() => { divide(100, 10e+400); }, Error);
    });
    it('Does not crash with weird parameters', () => {
        assert.doesNotThrow(() => { divide(100, obj); }, Error);
    });
    it('Works with easy parameters', () => {
        assert.equal(divide(4,2), 2);
    });
    it('Works with strings as parameters', () => {
        assert.equal(divide("4", "2"), 2);
    });
    it('Precise to a small delta with large remainder', () => {
        assert.closeTo(divide(10,3),3.3333333, 1e-6)

    });
});
