(() => {
	//any
	let dynamic: any;
	dynamic = 1;
	dynamic = 'str';
	dynamic = true;
	//dynamic(); // this will break our program and ts cant prevent it
	//dynamic.val = 1 ;//this will break our program and ts cant prevent it
	console.log(dynamic);
	//any deactivate type checking thus it allows asigne any value you want, this is inadvisable
	//this exits because of TS can be implemented gradually.

	//unknown
	/* unknown allows assigne any value but will prevent access properties or other 
	behavior that could break our program*/
	let moreSafety: unknown;
	moreSafety = 1;
	moreSafety = 'str';
	moreSafety = true;
	//moreSafety.val = 1; //this is not allowed
	//moreSafety() //this is not allowed
	let typeCheck: boolean;
	//typeCheck = moreSafety; // here typeScript demands to do a check type before
	if(typeof moreSafety === 'boolean') {
		typeCheck = moreSafety //now this is allowed since it is sure that moreSafety is a boolean;
	}
	console.log(moreSafety);
})();