//@authority
export abstract class Bankable {

	constructor(protected readonly id: number, protected _total: number) {
	}

	public canPay(amount: number): boolean {
		return amount <= this._total
	}

	//@authorityMethodIn
	public addMoney(amount: number): number {
		return this._total += amount
	}

	//@authorityMethodOut
	public spendMoney(amount: number): number {
		return this._total -= amount
	}

	public get bankId(): number{
		return this.id
	}

	public set bankId(newNumber: number){
		console.log('Cannot change bank id')
	}
	abstract get total(): number
}



function authority(target: any) {
	//console.log('authorityTarget', target)
	var original = target
	function construct(constructor, args) {
		var c: any = function () {
			return constructor.apply(this, args)
		}
		c.prototype = constructor.prototype
		return new c()
	}
	var f: any = function (...args) {
		if (target.name == 'Bankable'){
			console.log('New bankable:', args[0], 'value set to', args[1])
		}
		return construct(original, args)
	}
	f.prototype = original.prototype
	return f
}

function authorityMethodIn(target: Bankable, key: any, descriptor: any) {
	//console.log('authorityMethod', target, key, descriptor)
	if (descriptor === undefined) {
		descriptor = Object.getOwnPropertyDescriptor(target, key);
	}
	var originalMethod = descriptor.value
	descriptor.value = function (test) {
		console.log('Target', target.bankId, 'earned', arguments[0], '$$')
		var result = originalMethod.apply(this, arguments)
		return result
	}
	return descriptor
}

function authorityMethodOut(target: Bankable, key: any, descriptor: any) {
	//console.log('authorityMethod', target, key, descriptor)
	if (descriptor === undefined) {
		descriptor = Object.getOwnPropertyDescriptor(target, key);
	}
	var originalMethod = descriptor.value
	descriptor.value = function () {
		console.log('Target', target.bankId, 'paid', arguments[0], '$$')
		var result = originalMethod.apply(this, arguments)
		return result
	}
	return descriptor
}