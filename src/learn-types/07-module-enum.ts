//Enums are a set of named constants, predefined options that could forces your code to be consistent.
//if a property has not asigne value its value will be a number
// E.X: first property with not asigne value has 0 as value , second one has 1 and so on.

/* 

	Naming Convention:
	Enums are types, so they should be named using UpperCamelCase like classes. 
	The enum values are constants, so they should be named using lowerCamelCase like constants,
	or ALL_CAPS if your code uses that legacy naming style.
	
*/

enum RolesNumbers{
	FIRST_ROLE,
	SECOND_ROLE,
	THIRD_ROLE,
}

 console.log(RolesNumbers.FIRST_ROLE) // = 0
 console.log(RolesNumbers.SECOND_ROLE) // = 1
 console.log(RolesNumbers.THIRD_ROLE) // = 2

export enum Roles {
	ADMIN = 'admin',
	SELLER = 'seller',
	CUSTOMER = 'customer',
}

export type User = { 
	userName: string;
	role: Roles;
	//Enums can used like types and forces your code to use its properties.
}

export const newUser: User = {
	userName: 'testUser',
	//role: 'admin', throw error because of you should asigne the value direct from Roles enum, 
	//this makes your code more consistent
	role: Roles.ADMIN,
}