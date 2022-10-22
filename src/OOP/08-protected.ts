export class Animal {

	protected name: string; 
	/* 
		with protected it cant be modified and accessed outside outside 
		the class, but contrary to private, it could be accessed by inheriting classes.
	*/

	constructor(name: string) {
		this.name = name;
	}

	protected move() {
		console.log('moving along!');
	}

}

class Dog extends Animal {

	owner: string;

	constructor(name: string, owner: string) {
		super(name);
		this.owner = owner;
	}

	bark(times: number) {
		for (let index = 0; index < times; index++) {
			console.log('woof!');
		}
	}

	move() { // you can modify parent's method
		console.log('moving as a Dog!!');
		super.move();  //this way you can execute parent move method.
	}
}

const tommy = new Dog('Tommy', 'Smith');

tommy.bark(3);
tommy.move();