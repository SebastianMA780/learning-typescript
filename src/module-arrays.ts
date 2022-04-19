//Arrays
(() => {
	let prices = [1,2,4,5,6] // ts infers that it is an array of numbers
	//prices.push('test') // it is not allowed because of prices was defined like a number's array

	let newNumberArray = prices.map( price => price * 2);
	console.log(newNumberArray);

	//but prices.map( price => price * '2'); will throw error because of ts detect price is a number;

	let array1: Array<number> = [];
	let array2: string[] = [];
	let array3: (boolean)[] = [];
	//all this types are equal to type an array explicit
	array1.push(1) // only numbers are allowed
	array2.push('str') // only strings are allowed
	array3.push(false) // only booleans are allowed
	
	//you can combine types in arrays with unions --> |
	let combinedArray: Array<number | string> = [];
	combinedArray.push('1');
	combinedArray.push(2);
	//combinedArray.map( item => item + item) //not allowed because ts detect that type could have 2 types of values

})();