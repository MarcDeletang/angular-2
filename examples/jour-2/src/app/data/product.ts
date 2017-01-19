export interface IProduct {
	id: number
	name: string
	price: number
	type: string
}

export class Product implements IProduct {
	static ID = 0

	static generateId() : number{
		return Product.ID++
	}

	constructor(public name: string, public price: number, public type: string= '', public id: number = Product.generateId()){
	}

}
