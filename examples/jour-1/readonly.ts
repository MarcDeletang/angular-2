class Baz2 {
	public readonly message: string = 'Baz1'

	constructor(message: string) {
		if (message)
			this.message = message
	}

	invalid(error) {
		//this.message = error
	}
}

var baz1 = new Baz2('New')
console.log(baz1.message)