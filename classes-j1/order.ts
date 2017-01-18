import {
	IProduct
} from './IProduct'

export interface IOrder {
	name: string
	products: IProduct[]
	getPrice(): number
	onServed(isReady: boolean)
}

export class Order implements IOrder {

	constructor(public name: string, public products: IProduct[] = []) {
	}

	getPrice(): number {
		let total = 0
		for (var i = 0; i != this.products.length; ++i) {
			total += this.products[i].price
		}
		return total
	}

	onServed(isReady: boolean) {
		if (isReady)
			console.log('Order ' + this.name + ' is ready')
		else
			console.log('Order ' + this.name + ' is not ready')
	}
}