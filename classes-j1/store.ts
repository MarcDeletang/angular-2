import { IProduct } from './IProduct'
import { Product } from './Product'
import { Bankable } from './Bankable'
import { Injectable } from '@angular/core'

@Injectable()
export class Store {
	private readonly products: IProduct[] = []
	public readonly name: string = 'Amazing Store'

	constructor(){
	}

	addProducts(products: IProduct[] = []){
		//this.products = this.products.concat(products)
		for (var elem of products){
			this.products.push(elem)
		}
	}

	getProduct(id: string, client: Bankable): IProduct {
		for (let i = 0; i != this.products.length; ++i){
			if (this.products[i].id == id){
				let item = this.products[i]
				if (client.canPay(item.price)){
					client.spendMoney(item.price)
					this.products.splice(i, 1)
					return item
				}
				else{
					console.log('Client has no money')
					return null
				}
			}
		}
		console.log('Produit indisponible')
		return null
	}
}
