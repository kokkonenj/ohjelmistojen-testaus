import chai from "chai";
const expect = chai.expect;
import ceil from '../COMP.SE.200-2021-2022-1/src/ceil.js';

const neg = -11.5;
const pos = 11.5;

describe('ceil', () => {
	it('ceil of negative number', () => {
		expect(ceil(neg)).eq(-11);	
	});
	it('negative precision of negative number', () => {
		expect(ceil(neg, -1)).eq(-10);
		expect(ceil(neg, -2)).eq(0);
	});
	it('positive precision of negative number', () => {
		expect(ceil(neg, 1)).eq(-11.5);
		expect(ceil(neg, 2)).eq(-11.50);
	});
	it('ceil of positive number', () => {
		expect(ceil(pos)).eq(12);
	});
	it('negative precision of positive number', () => {
		expect(ceil(pos, -1)).eq(20);
		expect(ceil(pos, -2)).eq(100);
	});
	it('positive precision of negative number', () => {
		expect(ceil(pos, 1)).eq(11.5);
		expect(ceil(pos, 2)).eq(11.50);
	});
})