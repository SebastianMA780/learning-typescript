(() => {
	/* In Js we can send n parameters and with spread operator it will make an array with them */
	// const argsFn = (...args) => {
	// 	console.log(args);
	// }

	//So we can tell to ts what will be the n parameters.
	const argFn2 = (...args: string[]) => {
		console.log({
			args
		})
	}

	argFn2('arg1', 'arg2', 'arg3');

	//argFn2(1, {}, true);
	/* this throw error because we explicit tell to ts that we will send n parameters
	with type string. */
})();