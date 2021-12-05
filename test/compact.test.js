import chai from "chai";
const assert = chai.assert;
import compact from '../COMP.SE.200-2021-2022-1/src/compact.js';

describe('compact', () => {
    const emptyArr = [];
    const trueArr = [1, 2, 3];
    const falseArr = [0, false, ""];
    const mixArr = [0, 1, false, 2, '', 3]
    const mixArr2 = [0, 1, 2, '', 3];
    const emptyObj = {};
    var eobjArr = [emptyObj];
    var loremObj = { lorem: "ipsum" }
    var lobjArr = [loremObj];


    it('Array with falsey and true values', () => {
        assert.deepEqual(compact(mixArr),[1,2,3]);
    });
    it('Array with falsey and true values2', () => {
        assert.deepEqual(compact(mixArr2), [1, 2, 3]);
    });
    it('Empty array', () => {
        assert.deepEqual(compact(emptyArr), emptyArr);
    });
    it('Array with only false values', () => {
        assert.deepEqual(compact(falseArr),emptyArr);
    });
    it('Array with only true values', () => {
        assert.deepEqual(compact(trueArr), trueArr);
    });
    it('Array with empty custom object', () => {
        assert.deepEqual(compact(eobjArr), eobjArr);
    });
    it('Array with custom object', () => {
        assert.deepEqual(compact(lobjArr), lobjArr)
    });
    it('No Exception for empty object', () => {
        assert.doesNotThrow(() => { compact(eobjArr); }, Error);
    });
    it('No Exception for object', () => {
        assert.doesNotThrow(() => { compact(lobjArr); }, Error);
    });
});