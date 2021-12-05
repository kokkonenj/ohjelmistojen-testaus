import chai from "chai";
const assert = chai.assert;
import endsWith from '../COMP.SE.200-2021-2022-1/src/endsWith.js';

describe('endsWith', () => {
    var emptyObj = {};
    var foobar = { foo: "bar" };


    it('Works as expected, no position specified', () => {
        assert.equal(endsWith("abc", "c"), true);
    });
    it('Works as expected, position specified', () => {
        assert.equal(endsWith("abc", "b", 2), true);
    });
    it('Empty string', () => {
        assert.equal(endsWith("", "c"), false);
    });
    it('Position index out of bounds', () => {
        assert.equal(endsWith("abc", "b",7), false);
    });
    it('Negative position', () => {
        assert.equal(endsWith("abc", "a",-7), false);
    });
    it('No exception thrown with non-string input (Empty object)', () => {
        assert.doesNotThrow(() => { endsWith(emptyObj, "c"); }, Error);
    });
    it('No exception thrown with non-string input (Object)', () => {
        assert.doesNotThrow(() => { endsWith(foobar, "r"); }, Error);
    });
    it('No exception thrown with non-string input (Object), position specified', () => {
        assert.doesNotThrow(() => { endsWith(foobar, "c", 4); }, Error);
    });
    it('No exception thrown with non-string input (integer)', () => {
        assert.doesNotThrow(() => { endsWith(14, "c"); }, Error);
    });
    it('No exception thrown with non-string input (integer), position specified', () => {
        assert.doesNotThrow(() => { endsWith(143, "c", 2); }, Error);
    });

});