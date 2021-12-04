import chai from 'chai';
const expect = chai.expect;
import clamp from '../COMP.SE.200-2021-2022-1/src/clamp.js'

describe('clamp', () => {
	it('negative number outside bounds', () => {
		expect(clamp(-10, -5, 5)).eq(-5);
	});
	it('negative number at bound', () => {
		expect(clamp(-5, -5, 5)).eq(-5);
	});
	it('negative number inside bound', () => {
		expect(clamp(-4, -5, 5)).eq(-4);
	});
	it('zero inside bounds', () => {
		expect(clamp(0, -5, 5)).eq(0);
	});
	it('positive number outside bounds', () => {
		expect(clamp(10, -5, 5)).eq(5);
	});
	it('positive number at bound', () => {
		expect(clamp(5, -5, 5)).eq(5);
	});
	it('positive number inside bounds', () => {
		expect(clamp(4, -5, 5)).eq(4);
	})
});