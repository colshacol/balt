export const warn = (foo: string): string => {
	console.warn(foo);
	return foo.toUpperCase();
}