import { warn } from '../warn.js'

const { test, expect } = global;

test('warn()', () => {
	const result = warn('dogs');
	expect(result).toBe('DOGS');
})