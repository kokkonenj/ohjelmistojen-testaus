const chai = require('chai');
const expect = chai.expect;

describe('Example passing test', function() {
	const num = 1;
	
	it('num should equal 1', () => {
		expect(num).eq(1);
	});
	it('num should be positive', () => {
		expect(num).greaterThanOrEqual(0);
	});
});

describe('Example failing test', function() {
	const num = -1;

	it('num should be positive', () => {
		expect(num).greaterThanOrEqual(0);
	});
});