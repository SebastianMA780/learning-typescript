export class MyDate {

	year: number;
	month: number;
	private _day: number;

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
		this._day = day;
	}

	get day() {
		//get privates variables.
		return this._day;
	}

	set day(newDay: number) {
		//it is useful for adding rules to change variables;
		if(newDay > 31) return;
		if(newDay < 1) return;
		this._day = newDay;
	}

}

const myDate = new MyDate({
	year: 2021,
	month: 4,
	day: 22,
});
myDate.day = 2;
console.log(myDate.day);
