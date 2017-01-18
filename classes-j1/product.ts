import { IProduct } from './IProduct'

export class Product implements IProduct {

	constructor(public id: string, public name: string, public price: number){
	}

}
