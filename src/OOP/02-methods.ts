class MyDate {
	year: number;
	month: number;
	day: number;

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

	printFormat(): string {
		return `${this.day}/${this.month}/${this.year}`;
	}

}

export const myDate = new MyDate({
	year: 2021,
	month: 4,
	day: 22,
});

console.log(myDate.printFormat());
