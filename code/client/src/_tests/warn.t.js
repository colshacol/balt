import { warn } from '../warn';

it('warns me about things', () => {
	expect(warn('foo')).toEqual('FOO');
});
