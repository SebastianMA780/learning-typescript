/* Some times a fn can have multiple input or return values,
	In this case TS would not be capable to determine 
	what type of data the function will return.
	Gratefully there is a method that allow to us specify what would do the function.
*/
export function initialFn(input: string | string[]): string | string[]  {
	if(Array.isArray(input)) return input.join();
	return input.split('');
}

const valueWithString = initialFn('test Method');
const valueWithArray = initialFn(['t', 'e', 's' , 't']);

//valueWithString.reverse();  
//valueWithArray.toLowerCase();
/* Even we know what kind of value is returned in base of the input ts can't
	so we have to make a type check.
*/
if(typeof valueWithArray === 'string') {
	valueWithArray.toLowerCase();
}
if(Array.isArray(valueWithString)) {
	valueWithString.reverse();
}

//Or Overload
export function overloadFn(input: string): string[];
export function overloadFn(input: string[]): string;

export function overloadFn(input: unknown): unknown  {
	if(Array.isArray(input)) return input.join();
	if(typeof input === 'string') return input.split('');
}

const overloadValueWithString = overloadFn('test Method');
const overloadValueWithArray = overloadFn(['t', 'e', 's' , 't']);
//Now ts can make a proper type check in base of the input value.
overloadValueWithString.reverse();
overloadValueWithArray.toLowerCase();