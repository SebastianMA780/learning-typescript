(() => {
	//any
	let dynamic: any;
	dynamic = 1;
	dynamic = 'str';
	dynamic = true;
	dynamic(); // this will break our program and ts cant prevent it
	dynamic.val = 1 ;//this will break our program and ts cant prevent it
	console.log(dynamic);
	//any deactivate type checking thus it allows asigne any value you want, this is inadvisable
	//this exits because of ts can be implemented gradually.

	//unknown
	let moreSafety: unknown;
	moreSafety = 1;
	moreSafety = 'str';
	moreSafety = true;
	//unknown allows assigne any value but will prevent access properties or other behavior that could break our program
	//moreSafety.val = 1; // are not allowed
	//moreSafety() // are not allowed
	console.log(moreSafety);
})();