class MyDate {

	readonly day: number;
	readonly month: number; 
	private readonly year: number; // readonly prevents assignments to the field outside of the constructor.

	constructor({
		year,
		month,
		day
	}: {
		year: number,
		month: number,
		day: number,
	}) {
		this.year = year;
		this.month = month
		this.day = day;
	}

	public printFormat(): string {
		return `${this.day}/${this.month}/${this.year}`;
	}

	public modifyYear() {
		// this.year = 2022; // ERROR: Cannot assign to 'year' because it is a read-only property.
	}

}

export const myDate = new MyDate({
	year: 2021,
	month: 4,
	day: 22,
});

// myDate.year = 22 // ERROR: Property 'year' is private and only accessible within class 'MyDate'.,
// myDate.month = 22 // ERROR: Cannot assign to 'month' because it is a read-only property.