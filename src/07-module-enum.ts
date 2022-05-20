//Enums are a set of named constants, predefined options that could forces your code to be consistent.
//if a property has not asigne value its value will be a number
// E.X: first property with not asigne value has 0 as value , second one has 1 and so on.

enum ROLES_NUMBERS {
	FIRST_ROLE,
	SECOND_ROLE,
	THIRD_ROLE,
}

 console.log(ROLES_NUMBERS.FIRST_ROLE) // = 0
 console.log(ROLES_NUMBERS.SECOND_ROLE) // = 1
 console.log(ROLES_NUMBERS.THIRD_ROLE) // = 2

export enum ROLES {
	ADMIN = 'admin',
	SELLER = 'seller',
	CUSTOMER = 'customer',
}

export type User = { 
	userName: string;
	role: ROLES;
	//Enums can used like types and forces your code to use its properties.
}

export const newUser: User = {
	userName: 'testUser',
	//role: 'admin', throw error because of you should asigne the value direct from ROLES enum, 
	//this makes your code more consistent
	role: ROLES.ADMIN,
}