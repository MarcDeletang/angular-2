class Baz {
	static MESSAGE: string = 'Hello world'

	@decorated
	baz(){
	}
}

function decorated(test: any, test1: any, test2: any) {
	console.log('decorated', test, test1, test2)
}

console.log(Baz.MESSAGE)
var baz = new Baz()
	//baz.MESSAGE