import chai from 'chai';
const expect = chai.expect;
import filter from '../COMP.SE.200-2021-2022-1/src/filter.js'

describe('filter', () => {
	let arr = [];
	beforeEach(() => {
		arr = [
			1, "1", [1], 10, 12, "12", "11", [11]
		];
	});
	it('no matching predicate should return empty array', () => {
		expect(filter(arr, ({value}) => value == 2)).to.eql([[]]);
	});
	it('truthy predicate', () => {
		expect(filter(arr, (value) => value == 1)).to.have.members([1, "1", [1]]);
	});
	it('strictly true predicate', () => {
		expect(filter(arr, (value) => value === 1)).to.have.members([1]);
	});
});