import chai from "chai";
const assert = chai.assert;
import capitalize from '../COMP.SE.200-2021-2022-1/src/capitalize.js';

describe('capitalize', () => {
    const str = "HELLO";
    const nmbr = 12;
    const mix = "12HELLO";
    const empty = "";
    const symbol = "$";

    describe('No Exception thrown', () => {
        it('Passing a number', () => {
            assert.doesNotThrow(() => { capitalize(nmbr); }, Error);
        });
        it('Passing a string with a number as first character', () => {
            assert.doesNotThrow(() => { capitalize(mix); }, Error);
        });
        it('Passing an empty string', () => {
            assert.doesNotThrow(() => { capitalize(empty); }, Error);
        });
        it('Passing a symbol', () => {
            assert.doesNotThrow(() => { capitalize(symbol); }, Error);
        });
    });
    describe('Function works as expected', () => {
        it('Funtion returns expected value for normal strings', () => {
            assert.equal(capitalize(str), "Hello");
        });
        it('Function returns an empty string if passed an empty string', () => {
            assert.equal(capitalize(empty), "");
        });
        it('Function returns a string if passed an integer', () => {
            assert.equal(capitalize(nmbr), "12");
        });
        it('Function works if passed a symbol', () => {
            assert.equal(capitalize(symbol), "$");
        });

    });
});