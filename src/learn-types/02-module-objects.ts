export const obj = {
	val1: 'str',
	val2: 1,
	val3: true,
	val4: () => 'str',
} // if you initialize the object values ts will infer the types of properties
//obj.val3 = 100; //now you cant assign wrong values;
console.log(obj);

// you can specify types too them like this:
const objTyped: {
	val1: string,
	val2: number,
	val3: boolean,
	val4?: () => string,
} = {
	val1: 'str',
	val2: 1,
	val3: true,
	val4: () => 'str',
}
console.log(objTyped)
//objTyped.val2 = 'tree'  //this will throw an error because of val2 should be a number  
