// https://www.typescriptlang.org/docs/handbook/2/typeof-types.html

// JavaScript already has a typeof operator 
/* 
	TypeScript adds a typeof operator you can use in a type 
	context to refer to the type of a variable or property 
*/

export function type() {
  return { x: 10, y: 3 };
}
type FnType = ReturnType<typeof type>;
const obj: FnType = {
	x: 1,
	y: 2
}

// It’s only legal to use typeof on identifiers (i.e. variable names) or their properties.
let typeOfLimitation: typeof type(); // X