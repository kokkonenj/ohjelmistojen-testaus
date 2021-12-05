import chai from 'chai';
const expect = chai.expect;
import eq from '../COMP.SE.200-2021-2022-1/src/eq.js'
const testEq = eq;

describe('eq', () => {
	const types = [true, undefined, 10, 2n ** 53n, "string", Symbol("symbol"), {'a': 1}];
	// Null not included above, because typeof(null) = undefined
	describe('different types compared should return false', () => {
		for (let i = 0; i < types.length; i++) {
			for (let j = 0; j < types.length; j++) {
				if (i !== j) {
					const title = typeof(types[i]) + " compared to " + typeof(types[j]) + " should return false";
					it(title, () => {
						expect(testEq(types[i], types[j])).eq(false);
					});
				}
				else {
					continue;
				}
			}
		}
	});
	describe('same types compared', () => {
		it('NaN compared to NaN should return true', () => {
			expect(testEq(NaN, NaN)).eq(true);
		});
		it('+0 compared to -0 should return true', () => {
			expect(testEq(+0, -0)).eq(true);
		});
		it('same numbers compared should return true', () => {
			expect(testEq(10, 10)).eq(true);
		});
		it('different numbers compared should return false', () => {
			expect(testEq(10, 8)).eq(false);
		});
		it('both undefined should return true', () => {
			expect(testEq(undefined, undefined)).eq(true);
		});
		it('both null should return true', () => {
			expect(testEq(null, null)).eq(true);
		});
		it('same strings should return true', () => {
			expect(testEq("string1", "string1")).eq(true);
		});
		it('different strings should return false', () => {
			expect(testEq("string1", "string2")).eq(false);
		});
		it('same booleans should return true', () => {
			expect(testEq(true, true)).eq(true);
			expect(testEq(false, false)).eq(true);
		});
		it('different booleans should return false', () => {
			expect(testEq(true, false)).eq(false);
		});
		const sym1 = Symbol(1);
		const sym2 = Symbol(2);
		it('same symbols should return true', () => {
			expect(testEq(sym1, sym1)).eq(true);
		});
		it('different symbols should return false', () => {
			expect(testEq(sym1, sym2)).eq(false);
		});
		const obj1 = {'a': 1};
		const obj2 = {'a': 1};
		it('same object should return true' , () => {
			expect(testEq(obj1, obj1)).eq(true);
		});
		it('different object should return false', () => {
			expect(testEq(obj1, obj2)).eq(false);
		});
	});
});