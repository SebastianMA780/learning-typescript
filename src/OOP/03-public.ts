class MyDate {

	public year: number; // implicit ts makes all variables and methods public or
	public month: number; // you can explicitly define them as public
	public day: number;

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
