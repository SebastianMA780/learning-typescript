/*  An interface is a way to name an object type. */

/* 
	Naming Convention:

	types an interfaces should be written in UpperCamelCase.
	interfaces does not have to have I prefix.
*/

export interface Person {
	name: string;
	age: number;
	profession: string;
}

export const person: Person = {
	name: 'Willy',
	age: 27,
	profession: 'Software engineer',
}

/* type alias is a name for any type */

type TypeId = string | number;

export type PersonType = {
	name: string;
	age: number;
	profession: string;
}

export const otherPeson: PersonType = {
	name: 'Willy',
	age: 27,
	profession: 'Software engineer',
}

export const userIdTyped: TypeId = '38374jn' || 1;


/* 
	Interfaces vs Types
	1. interfaces are completely oriented to describe objects, a type can describe a primitive variable
	2. Interfaces can be extends although types can achieve the same in a different way.
	3. interfaces can be changed after being created, types doesn't
*/

//1.

type UserId = string | number;
export const userId: UserId = '134nadJS';
/* -- */
interface User {
	userName: string
	userId: string | number
}
export const userIds: User['userId'] = '134nadJS'; //only way to do the same that types.


//2.

interface Animal {
	class: string;
}
interface Lion extends Animal {
	category: string;
}
export const lion: Lion = {
	class: 'mammal',
	category: 'carnivorous',
}

/* -- */

type AnimalType = {
	class: string;
}
type LionType = AnimalType & {
	category: string;
}
export const lionType: LionType = {
	class: 'mammal',
	category: 'carnivorous',
}

//3.

interface Student {
	name: string;
}
interface Student {
	age: number;
}
export const student: Student = {
 name: 'exe'	,
 age: 27
}

/* -- */

type StudentType = {
	name: string;
}
// type StudentType = { //Error: duplicate identifier.
// 	age: number;
// }