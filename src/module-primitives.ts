//primitives
(() => {

	let str: string = 'ts'; // represents string values
	let num: number = 10; // represent a number, js does not have special runtime value for integers
	let bol: boolean = true; // true or false
	str = 'other';
	num = 11;
	bol = false;
	// str = 1;  //will throw error because of it should be a string
	// num = "str";  //will throw error because of it should be a number
	// bol = {};  //will throw error because of it should be a boolean.
	console.log({ str,num,bol })

	//String , Number , Boolean starting with capital letters refers to some special built-in so be careful.

	let strInference = 'initial value'// if you initialize a variable ts will infers the type and you wont be to asigne a different type
	//it is preferable use ts inference motor if it is possible.
	strInference.toLowerCase();

 })();