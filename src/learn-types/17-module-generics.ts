/* 
	Generics allow to us work over a variety of types rather a single one.
	https://www.typescriptlang.org/docs/handbook/2/generics.html
*/

	function fnType<Type>(param: Type): Type {
		return param; //this way we will know what return a function based on Type we pass.
	}

	export const str = fnType<string>('string'); //we can explicit indicate what type it would be or
	export const strImplicit = fnType('world'); //ts knows based on the param type what return type will be.

	interface GenericIdentityFn<Type> {
		(arg: Type): Type;
	} // you can define a function generic type, so any function with this type
	// should be this way.
	
	function identity<Type>(arg: Type): Type {
		return arg;
	}

	export const myIdentity: GenericIdentityFn<number> = identity;

// Generic Constraints

	/* 
		We could indicate to typeScript we want to work with any and all types but that type
		must have our constraint.	
	*/

	interface LengthConstraint {
		length: number;
	}

	function loggingIdentity<Type extends LengthConstraint>(arg: Type): Type {
		console.log(arg.length); // Now we know it has a .length property, so no more error
		return arg;
	}

	loggingIdentity([1,2]);
	loggingIdentity('works!!!');
	loggingIdentity(1); // Error -> number does not hace length property

//Type Parameters in Generic Constraints

	function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
		return obj[key];
	} // You can declare a type parameter that is constrained by another type parameter.
	
	let obj = { a: 1, b: 2, c: 3, d: 4 };
	
	getProperty(obj, "a");
	getProperty(obj, "m"); // Error -> m is not a property of obj