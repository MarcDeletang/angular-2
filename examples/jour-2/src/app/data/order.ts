import {
	IProduct
} from './product'

export interface IOrder {
	name: string
	products: IProduct[]
	getPrice(): number
	onServed
}

export class Order implements IOrder {

	constructor(public name: string, public products: IProduct[] = [], public onServed: any) {}

	getPrice(): number {
		let total = 0
		for (var i = 0; i != this.products.length; ++i) {
			total += this.products[i].price
		}
		return total
	}
}