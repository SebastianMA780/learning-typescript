/* TS allows to us define a default value in the params when it is not send */

export const defaultValues = (val1: boolean = true, val2: number = 10) => {
	console.log({
		val1,
		val2,
	})
}
defaultValues();
defaultValues(false, 100);
defaultValues(false, 111);
