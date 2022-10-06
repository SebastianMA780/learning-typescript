// https://www.typescriptlang.org/docs/handbook/2/keyof-types.html

/* 
	The keyof operator takes an object type and produces a string or
	numeric literal union of its keys. The following type P 
	is the same type as “x” | “y”: 
*/

type Point = { 'x': number; y: number , z: []};
type PointKeyType = keyof Point; //in this cases, its type is 'x | 'y' | 'z';
export const example: PointKeyType = 'x'


type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish; // its type number;
const arrayIsh: A = 1