class Foo2 {

	constructor(private _age: number){
	}

	set age(age: number){
		if (age == 42)
			console.log('42 !')
		this._age = age
	}

	get age(){
		console.log('returned age', this._age)
		return this._age
	}

}

var foo2 = new Foo2(42)
foo2.age = 1
console.log(foo2.age)
foo2.age = 42