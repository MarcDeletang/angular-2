import { Bankable } from './Bankable'
import { Store } from './store'
import { IOrder } from './order'
import { Injectable } from '@angular/core'

@Injectable()
export class Restaurant extends Bankable{

	constructor(private _store: Store){
		super(42, 100)
	}

	passOrder(order: IOrder){
		if (this._total < order.getPrice())
			return order.onServed(order, false, 'No funds')
		for (let i = 0; i != order.products.length; ++i){
			let newProduct = this._store.getProductByName(order.products[i].name, this)
			if (!newProduct)
				return order.onServed(order, false, 'No products in store')
		}
		return order.onServed(order, true, 'Success')
	}

	get total(): number{
		return this._total
	}

}