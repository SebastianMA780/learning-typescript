export function askForParameters(val1: string, val2: number, val3: boolean) {
	return {
		val1,
		val2,
		val3
	};
};
askForParameters('test', 1, true);
//When you specify types and parameters ts make mandatory call the function with the correct data
//askForParameters(true, 1, 'hi') this will throw error because it is not the correct order.

const returnFn = (): boolean => {
	return false;
}
const booleanVal: boolean = returnFn() // this way you can specify what will be the return value of the function
console.log(booleanVal);
// const returnFnVoid = (): void => {
// 	return false;
// } // void is used to specify that the fn return is none, so this will throw an error because of
// it is returning a boolean.
