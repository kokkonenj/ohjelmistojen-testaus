import chai from "chai";
const assert = chai.assert;
import get from '../COMP.SE.200-2021-2022-1/src/get.js';

describe('get', () => {
    const defaultValue = 'default';
    const obj = { 'a': [{ 'b': { 'c': 3 } }] };
    const emptyObj = {};

    it('Works according to source code example', () => {
        assert.equal(get(obj, 'a[0].b.c'), 3);
    });
    it('Works according to source code example, with default value specified', () => {
        assert.equal(get(obj, 'a[0].b.c', defaultValue), 3);
    });
    it('Works for properties in the middle of the path', () => {
        assert.deepEqual(get(obj, 'a[0].b'), { 'c': 3 });
    });
    
    it('Returns defaultValue for undefined parameters', () => {
        assert.equal(get(obj, 'a[0].c.d', 'default'), defaultValue);
    });
    it('No exception thrown with empty object', () => {
        assert.doesNotThrow(() => { get(emptyObj, 'a.[0].c.d'); }, Error);
    });
    it('No exception thrown with non-object parameter (integer)', () => {
        assert.doesNotThrow(() => { get(12, ''); }, Error);
    });
    it('No exception thrown with nonsense path', () => {
        assert.doesNotThrow(() => { get(obj, 123); }, Error);
    });
    it('Returns undefined with undefined defaultvalue', () => {
        assert.equal(get(obj, 'a[0].c.d'), undefined);

    });
});