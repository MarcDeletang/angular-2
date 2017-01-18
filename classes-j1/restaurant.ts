import { Bankable } from './Bankable'
import { Store } from './store'
import { IOrder } from './order'
import { Injectable } from '@angular/core'

@Injectable()
export class Restaurant extends Bankable{

	constructor(private _store: Store = null){
		super(42, 200)
	}

	passOrder(order: IOrder){
		if (this._total < order.getPrice())
			return order.onServed(false)
		for (let i = 0; i != order.products.length; ++i){
			let newProduct = this._store.getProduct(order.products[i].id, this)
			if (!newProduct)
				return order.onServed(false)
		}
		order.onServed(true)
	}

	get total(): number{
		return this._total
	}

}