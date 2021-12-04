import chai from 'chai';
const expect = chai.expect;
import defaultTo from '../COMP.SE.200-2021-2022-1/src/defaultTo.js'

describe('defaultTo', () => {
	const defaultValue = 10;

	it('negative number should return itself', () => {
		expect(defaultTo(-5, defaultValue)).eq(-5);
	});
	it('zero should return itself', () => {
		expect(defaultTo(0, defaultValue)).eq(0);
	});
	it('positive number should return itself', () => {
		expect(defaultTo(5, defaultValue)).eq(5);
	});
	it('NaN should return defaultValue', () => {
		expect(defaultTo(NaN, defaultValue)).eq(defaultValue);
	});
	it('string should return defaultValue', () => {
		expect(defaultTo("string", defaultValue)).eq(defaultValue);
	});
	it('null should return defaultValue', () => {
		expect(defaultTo(null, defaultValue)).eq(defaultValue);
	});
	it('undefined should return defaultValue', () => {
		expect(defaultTo(undefined, defaultValue)).eq(defaultValue);
	});
});