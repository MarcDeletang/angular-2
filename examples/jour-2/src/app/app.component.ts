import {
	Component
} from '@angular/core'
import {
	Foo
} from './DIFail/fail'
import {
	Order
} from './data/order'
import {
	Product
} from './data/product'
import {
	Restaurant
} from './data/restaurant'
import {
	Store
} from './data/store'
import * as _ from "lodash"
//var fail  = new Foo()



@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	message = 'Bonjour !'
	selected: Product[] = []

	constructor(private store: Store) {
	}

	onOrder(order: Order, isReady: boolean, message: string) {
		console.log('onOrder', order, isReady, message)
	}

	onClick(value: string) {
		console.log('input value', value)
		console.log(this.store)
	}

	elemClicked(product: Product) {
		let idx = _.findIndex(this.selected, {
			id: product.id
		})
		if (idx == -1)
			this.selected.push(product)
		else
			this.selected.splice(idx, 1)
	}

	getProductClass(product: Product) {
		let idx = _.findIndex(this.selected, {
			id: product.id
		})
		if (idx != -1)
			return 'success'
	}

	clear() {
		this.selected = []
	}

	remove() {
		for (let i = 0; i != this.selected.length; ++i) {
			let idx = _.findIndex(this.store.products, {
				id: this.selected[i].id
			})
			if (idx != -1)
				this.store.products.splice(idx, 1)
		}
	}

}