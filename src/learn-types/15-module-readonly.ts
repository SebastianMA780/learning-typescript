/* Properties that should not be modify we can use readonly ts feature */
export interface User {
	name: string;
	age: number;
}
export interface UserReadOnly {
	readonly name: string;
	readonly age: number;
}

const user: User = {
	name: 'test',
	age: 2
}

user.name = 'other name';

const userReadonly: UserReadOnly = {
	name: 'test',
	age: 2
}
//userReadonly.name = '' // TS Error: Can't assign name because it is readonly property