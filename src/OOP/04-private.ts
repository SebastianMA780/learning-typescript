class MyDate {

	private year: number; // by adding private properties cannot be accessed outside the class
	private month: number; 
	private day: number;

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

}

export const myDate = new MyDate({
	year: 2021,
	month: 4,
	day: 22,
});

// myDate.year --> ERROR: Property 'year' is private and only accessible within class 'MyDate'.,
