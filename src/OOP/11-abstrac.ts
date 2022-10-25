/* 
	restricted class that cannot be used to create objects 
	(to access it, it must be inherited from another class).
*/

export abstract class Animal {

	protected name: string; 
	/* 
		with protected it cant be modified and accessed outside outside 
		the class, but contrary to private, it could be accessed by inheriting classes.
	*/

	constructor(name: string) {
		this.name = name;
	}

	move() {
		console.log('moving along!');
	}

}

//const genericAnimal = new Animal('lion'); //Cannot create an instance of an abstract class.
class Lion extends Animal {}; // abstract class only be use to extend classes.
const lion = new Lion('Lion');
lion.move();