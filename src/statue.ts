import { Artwork } from "./artwork";

export class Statue implements Artwork {
	title: string;
  	year: number;
  	price: number;
	height: number;

	constructor(title: string, year: number, price: number, height:number) {
		if (title.trim() == '') {
            throw new Error('EmptyName');
        }
		let pattern = /[^a-zA-Z ,]/
		if (pattern.test(title)) {
            throw new Error('InvalidName');
        }
        if (year.trim() == '') {
            throw new Error('EmptyYear');
        }
		if (year.trim() >= (new Date()).getFullYear())
		{
			throw new Error('HighYear');
		}
		if (price.trim() == '') {
            throw new Error('EmptyPrice');
        }
		if (price.trim() < 1) {
            throw new Error('LowPrice');
        }
		if (height.trim() == '') {
            throw new Error('EmptyHeight');
        }
		if (height.trim() < 10) {
            throw new Error('LowHeight');
        }
        this.title = title;
        this.year = year;
        this.price = price;
        this.height = height;
	}
}