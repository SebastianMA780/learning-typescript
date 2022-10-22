export class MyMath {
	static readonly PI = 3.1416; 
	//with static you can access to properties and
	//methods without an instance of the class

	static max(...numbers: number[]) {
		return numbers.reduce((max, item) => max >= item ? max : item);
	}
}

console.log(MyMath.PI);
console.log(MyMath.max(1,2,4))