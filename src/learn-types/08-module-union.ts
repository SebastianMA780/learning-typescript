//union
export function dynamicFn(value: string | number) { // this union allows to pass strings or numbers.
	if (typeof value === 'string') {
		//value could be used as string because of typing checked
		return value.toLowerCase()
	}
	return value * 2; 
}
dynamicFn('CAPITAL');
dynamicFn(1);
//dynamicFn({}) // this throw error because only numbers or strings are allowed