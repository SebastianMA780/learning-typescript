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
}
 
function identity<Type>(arg: Type): Type {
  return arg;
}
 
export const myIdentity: GenericIdentityFn<number> = identity;

//pending: https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-classes