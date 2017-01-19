import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IProduct, Product} from '../data/product'
import { Restaurant } from '../data/restaurant'
import { Store } from '../data/store'

@Component({
	selector: 'app-input-product',
	templateUrl: './input-product.component.html',
	styleUrls: ['./input-product.component.css']
})
export class InputProductComponent implements OnInit {

	constructor(private store: Store) {

	}

	ngOnInit() {
	}

	onClick(name, type, price){
		this.store.addProducts([ new Product(name, type, price) ])
	}

}
