class MyDate {

	//shortcut to define and assign variables in the constructor.
	constructor(
		public year: number, 
		public month: number,
		public day: number) {}

}

export const myDate = new MyDate(
	2021,
	4,
	22,
);
