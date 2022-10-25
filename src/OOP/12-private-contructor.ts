// this feature can be useful to create a design pattern as singleton

export class MyService {

	name: string;

	constructor(name: string) {
		this.name = name;
	}

	getName() {
		return this.name;
	}

}

const myService1 = new MyService('service1');
console.log(myService1.getName());
const myService2 = new MyService('service2');
console.log(myService2.getName());
console.log(myService1 === myService2); //false, each instance is different.


export class MySingletonService {

	static instance: MySingletonService | null = null;

	private constructor(private name: string) {} 
	//by adding private it can be only call inside the class.

	getName() {
		return this.name;
	}

	static create(name: string) {
		if (!MySingletonService.instance) {
			MySingletonService.instance = new MySingletonService(name);
		}
		return MySingletonService.instance;
	}

}

const service1 = MySingletonService.create('service1');
const service2 = MySingletonService.create('service2'); //arguments only will be used in the first instance of the object.
const service3 = MySingletonService.create('service3');

console.log(service1 === service2);
console.log(service1.getName());
console.log(service2.getName());
console.log(service3.getName());
console.log(service2 === service3);
