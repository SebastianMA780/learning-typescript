(() => {
	/* This function never stop , so ts alerts with type never because of
	the app will stop.
	*/
	const withoutEnd = () => {
		while (true) {
			console.log('this never stop');
		}
	}

	const message = () => {
		throw new Error('')
	}
	//so never is a type which will alert you when the app will stop because a code breaks it.


})();